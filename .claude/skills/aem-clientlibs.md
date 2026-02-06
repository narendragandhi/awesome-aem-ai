---
description: AEM Client Libraries (clientlibs) management best practices
---

# AEM Client Libraries Best Practices

## Basic Clientlib Structure

```
/apps/myproject/clientlibs/
└── clientlib-base/
    ├── .content.xml
    ├── css/
    │   ├── base.css
    │   └── components.css
    ├── css.txt
    ├── js/
    │   ├── main.js
    │   └── utils.js
    └── js.txt
```

## Clientlib Definition (.content.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:cq="http://www.day.com/jcr/cq/1.0"
          xmlns:jcr="http://www.jcp.org/jcr/1.0"
    jcr:primaryType="cq:ClientLibraryFolder"
    categories="[myproject.base]"
    cssProcessor="[default:none,min:none]"
    jsProcessor="[default:none,min:none]"
    allowProxy="{Boolean}true"/>
```

## File Manifests

### css.txt
```
#base=css
base.css
components.css
```

### js.txt
```
#base=js
utils.js
main.js
```

## Clientlib Categories Strategy

```
myproject.base          # Core styles/scripts (all pages)
myproject.components    # Shared component libraries
myproject.site          # Site-specific overrides
myproject.vendor        # Third-party libraries
myproject.author        # Author-only (edit mode)
```

## Dependencies and Embedding

```xml
<!-- Depend on another clientlib (loaded separately) -->
<jcr:root
    jcr:primaryType="cq:ClientLibraryFolder"
    categories="[myproject.components]"
    dependencies="[myproject.base]"/>

<!-- Embed another clientlib (merged into this one) -->
<jcr:root
    jcr:primaryType="cq:ClientLibraryFolder"
    categories="[myproject.site]"
    embed="[myproject.base,myproject.components]"/>
```

## Including in HTL

```html
<!-- In page component (customheaderlibs.html) -->
<sly data-sly-use.clientlib="/libs/granite/sightly/templates/clientlib.html">
    <sly data-sly-call="${clientlib.css @ categories='myproject.base'}"/>
</sly>

<!-- In page component (customfooterlibs.html) -->
<sly data-sly-use.clientlib="/libs/granite/sightly/templates/clientlib.html">
    <sly data-sly-call="${clientlib.js @ categories='myproject.base'}"/>
</sly>

<!-- Include both CSS and JS -->
<sly data-sly-call="${clientlib.all @ categories='myproject.base'}"/>

<!-- Multiple categories -->
<sly data-sly-call="${clientlib.css @ categories=['myproject.base', 'myproject.components']}"/>
```

## Proxy Clientlibs (Recommended)

Enable proxy for dispatcher caching:

```xml
<jcr:root
    jcr:primaryType="cq:ClientLibraryFolder"
    categories="[myproject.base]"
    allowProxy="{Boolean}true"/>
```

Access via: `/etc.clientlibs/myproject/clientlibs/clientlib-base.css`

## Component-specific Clientlibs

```
/apps/myproject/components/hero/
├── hero.html
├── _cq_dialog/
└── clientlibs/
    └── editor/
        ├── .content.xml      # categories="[myproject.hero.editor]"
        ├── css.txt
        └── css/
            └── editor.css    # Edit mode only styles
```

Include conditionally:
```html
<sly data-sly-test="${wcmmode.edit}">
    <sly data-sly-call="${clientlib.css @ categories='myproject.hero.editor'}"/>
</sly>
```

## Preprocessors (LESS/SASS)

### LESS Configuration
```xml
<jcr:root
    jcr:primaryType="cq:ClientLibraryFolder"
    categories="[myproject.base]"
    cssProcessor="[default:none,min:none]"/>
```

### css.txt for LESS
```
#base=less
variables.less
mixins.less
main.less
```

## JavaScript Modules (ES6)

For modern JS, use a build tool (webpack/vite) and output to clientlib:

```
ui.frontend/                    # Frontend source
├── src/
│   ├── main/
│   │   └── webpack/
│   │       └── site/
│   │           └── main.ts
│   └── package.json
└── webpack.config.js

ui.apps/                        # AEM package
└── src/main/content/jcr_root/
    └── apps/myproject/clientlibs/
        └── clientlib-site/     # Built output copied here
```

## AEM as Cloud Service Considerations

### Minification (AEMaaCS handles this)
```xml
<jcr:root
    jcr:primaryType="cq:ClientLibraryFolder"
    categories="[myproject.base]"
    cssProcessor="[default:none,min:none]"
    jsProcessor="[default:none,min:none]"/>
```

### Long-term Caching
```xml
<jcr:root
    jcr:primaryType="cq:ClientLibraryFolder"
    categories="[myproject.base]"
    longCacheKey="${project.version}"/>
```

## Debugging Clientlibs

### Debug Mode URL Parameters
```
?debugClientLibs=true           # Show individual files
```

### Rebuild Clientlibs
```
/libs/granite/ui/content/dumplibs.rebuild.html
```

### View Clientlib Content
```
/libs/granite/ui/content/dumplibs.html
```

## Performance Optimization

### 1. Minimize Categories
```html
<!-- Bad: Multiple requests -->
<sly data-sly-call="${clientlib.css @ categories='lib1'}"/>
<sly data-sly-call="${clientlib.css @ categories='lib2'}"/>
<sly data-sly-call="${clientlib.css @ categories='lib3'}"/>

<!-- Good: Single combined request -->
<sly data-sly-call="${clientlib.css @ categories=['lib1','lib2','lib3']}"/>
```

### 2. Async/Defer Loading
```html
<!-- Async JavaScript -->
<sly data-sly-call="${clientlib.js @ categories='myproject.base', async=true}"/>

<!-- Defer JavaScript -->
<sly data-sly-call="${clientlib.js @ categories='myproject.base', defer=true}"/>
```

### 3. Critical CSS
```html
<!-- Inline critical CSS -->
<style>
    ${criticalCss}
</style>

<!-- Load rest async -->
<link rel="preload" href="/etc.clientlibs/myproject/clientlibs/base.css" as="style">
<noscript><link rel="stylesheet" href="/etc.clientlibs/myproject/clientlibs/base.css"></noscript>
```

### 4. Resource Hints
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://analytics.example.com">
```

## Versioned Clientlibs

Using content hash for cache busting:

```java
// Sling Model
@Self
private SlingHttpServletRequest request;

public String getClientlibPath() {
    HtmlLibraryManager libraryManager = request.adaptTo(HtmlLibraryManager.class);
    HtmlLibrary library = libraryManager.getLibrary(LibraryType.CSS, "myproject.base");
    return library.getPath(true); // includes hash
}
```

## Common Issues

1. **Clientlib not loading**: Check category name spelling, allowProxy setting
2. **CSS order wrong**: Verify css.txt order, check dependencies
3. **JS errors**: Check js.txt order, ensure dependencies loaded first
4. **Cache issues**: Clear browser cache, rebuild clientlibs
5. **404 on publish**: Verify allowProxy=true and dispatcher config

## Dispatcher Configuration

```
/etc.clientlibs/*          # Allow clientlib proxies
/libs/clientlibs/*         # Block direct access
/apps/*/clientlibs/*       # Block direct access
```

## References

- [AEM Client Libraries](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/developing/full-stack/clientlibs.html)
- [Front-end Build Pipeline](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/sites/administering/site-creation/enable-front-end-pipeline.html)
