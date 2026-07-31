---
description: Dispatcher/CDN caching decisions, invalidation, SDI, and permission-sensitive caching for AEM
---

# AEM Caching Strategy

## The AEM Caching Stack

```
Browser        Short TTL (minutes)   Controlled by headers
CDN             Medium TTL (hours)    Fastly/Akamai config
Dispatcher      Until invalidation    Stat-file based, not TTL
AEM Publisher   In-memory             Sling Models, queries
```

Dispatcher caches forever until explicitly invalidated — treat it differently from every other layer in this stack.

## Decision: What to Cache Where

```
Does content vary by AEM permission (CUG, ACL-gated)?
  YES → never cache at Dispatcher/CDN — see "Permission-Sensitive Caching" below

Is content personalized per-user?
  YES → don't cache at Dispatcher; use SDI, client-side, or ESI at CDN

Is content personalized per-segment?
  YES → cache the shell, SDI for the personalized part

Does content change less than once a day?
  YES → full page cache + replication invalidation

Does content change frequently?
  YES → short CDN TTL + micro-caching

Is it an API response?
  YES → application cache (e.g. Caffeine) + short HTTP TTL
```

## Dispatcher Invalidation

Dispatcher uses **stat-file invalidation**, not TTL: on publish, the replication agent touches a `.stat` file, and every cached file older than it is treated as stale on next request.

```apache
/cache {
    /docroot "/var/cache/dispatcher"
    /statfileslevel "2"   # 0 = whole cache, 1 = per site, 2 = per site/lang
}
```

Gotcha: invalidating `/content/site/page` does **not** automatically invalidate `/content/site/page.html` or `.model.json` — add explicit `/invalidate` glob rules for the extensions and variants you actually serve:

```apache
/invalidate {
    /0000 { /glob "*" /type "deny" }
    /0001 { /glob "*.html" /type "allow" }
    /0002 { /glob "*.json" /type "allow" }
    /0003 { /glob "*/" /type "allow" }
}
```

## Sling Dynamic Include (SDI) for Partial Caching

Cache a page shell at Dispatcher while pulling dynamic fragments (cart, personalized blocks) via a separate SSI/ESI include that bypasses the cache:

```java
// OSGi config: org.apache.sling.dynamicinclude.Configuration
include-filter.config.enabled=true
include-filter.config.base-path="/content"
include-filter.config.resource-types=["site/components/header","site/components/cart"]
include-filter.config.include-type="SSI"
include-filter.config.required-selectors="nocache"
```

Each include is a separate HTTP request — use for genuinely dynamic fragments, not everywhere.

## CDN Cache Keys and Purging

CDNs cache by URL, but AEM responses vary by selector, query params, and headers. Use surrogate keys / cache tags so a single publish event can purge every variant of a page:

```java
response.setHeader("Surrogate-Key", "page-123 section-home site-mysite");
cdnClient.purgeByTag("page-123");
```

## Permission-Sensitive Caching

Dispatcher and CDN cache by URL and have no concept of AEM permissions or Closed User Group (CUG) membership — that check only happens on the AEM instance. If a URL can render different HTML for different users, caching it can leak one user's response to another. This is a security decision, not a performance one.

**Default rule**: anything gated by a CUG or per-user/per-group ACL should never be written to the Dispatcher disk cache or a shared CDN cache. Split the page instead — a cacheable public shell plus an SDI/AJAX-loaded gated fragment served with `Cache-Control: private, no-store`.

**`allowAuthorized`** (dispatcher.any `/cache` section) controls whether Dispatcher caches responses to requests carrying auth info. It defaults to `0` (don't cache) — leave it there. Flipping it to `1` means one logged-in user's permission-checked page can be written to disk and replayed to the next visitor of that URL, authenticated or not.

```apache
/cache {
    /allowAuthorized "0"   # default — keep it
}
```

**If the whole page is secured and traffic is high enough that the shell/fragment split isn't enough**, Dispatcher has a purpose-built mechanism — the `auth_checker` module. It re-validates the *user* on every request instead of the *content*:

```apache
/auth_checker {
    /url "/bin/permissioncheck"
    /filter {
        /0001 { /glob "*" /type "deny" }
        /0002 { /glob "/content/secure/*.html" /type "allow" }
    }
    /headers {
        /0001 "Set-Cookie"
    }
}
```

Dispatcher sends a `HEAD` to your `/bin/permissioncheck` servlet (a `SlingSafeMethodsServlet` implementing only `doHead`) for each filtered request. `200` → serve the cached page; anything else → fall through to AEM. This is the supported way to cache secured content — reach for it only when traffic actually justifies owning that servlet.

**Gotcha**: a page that's public today and gets a CUG added later keeps serving its old public-cached copy until you explicitly flush it — republishing alone doesn't retroactively evict what Dispatcher already cached.

## Quick Reference

| Content Type | Dispatcher | CDN | Application |
|--------------|-----------|-----|-------------|
| Marketing pages | Full page | 1-4 hours | No |
| Product pages | Full page | 15-60 min | API cache |
| Navigation | SDI fragment | 1 hour | No |
| User dashboard | No | No | Session cache |
| CUG / permission-gated | Never | Never | Session cache only |
| API responses | No | Varies | Varies |

## Anti-Patterns

- `statfileslevel "0"` — every publish invalidates the entire cache
- No CDN purge integration on publish — CDN serves stale content indefinitely
- `allowAuthorized "1"` without narrow path scoping — permission-checked pages leak across users
- Adding a CUG to a page that was already publicly cached, without flushing it

## References

- [Dispatcher Configuration](https://experienceleague.adobe.com/en/docs/experience-manager-dispatcher/using/configuring/dispatcher-configuration)
- [Caching Secured Content (auth_checker)](https://experienceleague.adobe.com/docs/experience-manager-dispatcher/using/configuring/permissions-cache.html)
- [Dispatcher Security Checklist](https://experienceleague.adobe.com/en/docs/experience-manager-dispatcher/using/getting-started/security-checklist)
- [Closed User Groups](https://experienceleague.adobe.com/en/docs/experience-manager-65/content/security/closed-user-groups)
- [Sling Dynamic Include](https://sling.apache.org/documentation/bundles/dynamic-includes.html)
