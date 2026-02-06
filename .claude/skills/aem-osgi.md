---
description: OSGi configuration and services best practices for AEM
---

# AEM OSGi Best Practices

## OSGi Service Structure

```java
package com.example.core.services;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

// Interface
public interface EmailService {
    void sendEmail(String to, String subject, String body);
}

// Implementation
@Component(service = EmailService.class)
public class EmailServiceImpl implements EmailService {

    @Reference
    private MessageGatewayService messageGatewayService;

    @Override
    public void sendEmail(String to, String subject, String body) {
        MessageGateway<Email> gateway = messageGatewayService.getGateway(Email.class);
        Email email = new SimpleEmail();
        email.addTo(to);
        email.setSubject(subject);
        email.setMsg(body);
        gateway.send(email);
    }
}
```

## Configurable OSGi Service

```java
package com.example.core.services.impl;

import com.example.core.services.ApiService;
import org.osgi.service.component.annotations.*;
import org.osgi.service.metatype.annotations.*;

@Component(service = ApiService.class, configurationPolicy = ConfigurationPolicy.REQUIRE)
@Designate(ocd = ApiServiceImpl.Config.class)
public class ApiServiceImpl implements ApiService {

    @ObjectClassDefinition(
        name = "API Service Configuration",
        description = "Configuration for external API integration"
    )
    @interface Config {
        @AttributeDefinition(
            name = "API Endpoint",
            description = "Base URL for the API"
        )
        String api_endpoint() default "https://api.example.com";

        @AttributeDefinition(
            name = "API Key",
            description = "Authentication key for API access",
            type = AttributeType.PASSWORD
        )
        String api_key();

        @AttributeDefinition(
            name = "Timeout (seconds)",
            description = "Connection timeout in seconds"
        )
        int timeout() default 30;

        @AttributeDefinition(
            name = "Enabled",
            description = "Enable or disable the service"
        )
        boolean enabled() default true;
    }

    private String endpoint;
    private String apiKey;
    private int timeout;
    private boolean enabled;

    @Activate
    @Modified
    protected void activate(Config config) {
        this.endpoint = config.api_endpoint();
        this.apiKey = config.api_key();
        this.timeout = config.timeout();
        this.enabled = config.enabled();
    }

    @Override
    public String fetchData(String path) {
        if (!enabled) {
            throw new IllegalStateException("Service is disabled");
        }
        // Implementation using endpoint, apiKey, timeout
        return callApi(endpoint + path);
    }
}
```

## OSGi Configuration Files

Store in `ui.config/src/main/content/jcr_root/apps/myproject/osgiconfig/`:

### Run-mode specific configs
```
osgiconfig/
├── config/                           # All environments
│   └── com.example.core.services.impl.ApiServiceImpl.cfg.json
├── config.author/                    # Author only
├── config.publish/                   # Publish only
├── config.dev/                       # Dev environment
├── config.stage/                     # Stage environment
├── config.prod/                      # Production
└── config.author.dev/                # Author + Dev
```

### Config file format (.cfg.json)
```json
{
    "api.endpoint": "https://api.example.com",
    "api.key": "$[secret:api_key]",
    "timeout": 30,
    "enabled": true
}
```

### Environment-specific with Cloud Manager
```json
{
    "api.endpoint": "$[env:API_ENDPOINT;default=https://api.example.com]",
    "api.key": "$[secret:API_KEY]"
}
```

## Service Ranking and Filtering

```java
// Higher ranking = higher priority
@Component(
    service = SearchProvider.class,
    property = {
        "service.ranking:Integer=100"
    }
)
public class PrimarySearchProvider implements SearchProvider {
    // Primary implementation
}

@Component(
    service = SearchProvider.class,
    property = {
        "service.ranking:Integer=50"
    }
)
public class FallbackSearchProvider implements SearchProvider {
    // Fallback implementation
}

// Inject highest ranked
@Reference
private SearchProvider searchProvider;

// Inject all implementations
@Reference(cardinality = ReferenceCardinality.MULTIPLE, policy = ReferencePolicy.DYNAMIC)
private volatile List<SearchProvider> providers;
```

## Factory Configurations

```java
@Component(
    service = Endpoint.class,
    configurationPolicy = ConfigurationPolicy.REQUIRE,
    factory = "com.example.core.endpoints"
)
@Designate(ocd = EndpointImpl.Config.class, factory = true)
public class EndpointImpl implements Endpoint {

    @ObjectClassDefinition(name = "Endpoint Configuration")
    @interface Config {
        @AttributeDefinition(name = "Name")
        String name();

        @AttributeDefinition(name = "URL")
        String url();
    }

    private String name;
    private String url;

    @Activate
    protected void activate(Config config) {
        this.name = config.name();
        this.url = config.url();
    }
}
```

Factory config files:
```
com.example.core.endpoints~primary.cfg.json
com.example.core.endpoints~secondary.cfg.json
```

## Scheduler Service

```java
@Component(service = Runnable.class)
@Designate(ocd = ContentSyncScheduler.Config.class)
public class ContentSyncScheduler implements Runnable {

    @ObjectClassDefinition(name = "Content Sync Scheduler")
    @interface Config {
        @AttributeDefinition(
            name = "Cron Expression",
            description = "Cron expression for scheduling"
        )
        String scheduler_expression() default "0 0 2 * * ?"; // 2 AM daily

        @AttributeDefinition(name = "Concurrent")
        boolean scheduler_concurrent() default false;

        @AttributeDefinition(name = "Enabled")
        boolean enabled() default true;
    }

    private boolean enabled;

    @Activate
    protected void activate(Config config) {
        this.enabled = config.enabled();
    }

    @Override
    public void run() {
        if (!enabled) return;
        // Sync logic here
    }
}
```

## Event Handler

```java
@Component(
    service = EventHandler.class,
    property = {
        EventConstants.EVENT_TOPIC + "=" + PageEvent.EVENT_TOPIC,
        EventConstants.EVENT_FILTER + "=(path=/content/mysite/*)"
    }
)
public class PageEventHandler implements EventHandler {

    private static final Logger LOG = LoggerFactory.getLogger(PageEventHandler.class);

    @Override
    public void handleEvent(Event event) {
        PageEvent pageEvent = PageEvent.fromEvent(event);
        for (PageModification mod : pageEvent.getModifications()) {
            LOG.info("Page {} was {}", mod.getPath(), mod.getType());
        }
    }
}
```

## Sling Job Consumer

```java
// Job Consumer
@Component(
    service = JobConsumer.class,
    property = {
        JobConsumer.PROPERTY_TOPICS + "=myproject/job/import"
    }
)
public class ImportJobConsumer implements JobConsumer {

    @Override
    public JobResult process(Job job) {
        String path = job.getProperty("path", String.class);
        try {
            // Process import
            return JobResult.OK;
        } catch (Exception e) {
            return JobResult.FAILED;
        }
    }
}

// Creating a job
@Reference
private JobManager jobManager;

public void scheduleImport(String path) {
    Map<String, Object> props = new HashMap<>();
    props.put("path", path);
    jobManager.addJob("myproject/job/import", props);
}
```

## Servlet with OSGi

```java
@Component(service = Servlet.class)
@SlingServletResourceTypes(
    resourceTypes = "myproject/components/api",
    methods = HttpConstants.METHOD_GET,
    extensions = "json",
    selectors = "data"
)
public class DataServlet extends SlingSafeMethodsServlet {

    @Reference
    private DataService dataService;

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
            throws IOException {
        response.setContentType("application/json");
        response.getWriter().write(dataService.getJson());
    }
}
```

## Best Practices

1. **Always use interfaces** - Depend on abstractions, not implementations
2. **Use ConfigurationPolicy.REQUIRE** - For services needing configuration
3. **Environment variables for secrets** - Never hardcode credentials
4. **Run-mode configs** - Separate dev/stage/prod configurations
5. **Service ranking** - For multiple implementations
6. **Lazy activation** - Services start only when needed
7. **Volatile for dynamic references** - Thread-safe collection updates

## References

- [OSGi Declarative Services](https://docs.osgi.org/specification/osgi.cmpn/8.0.0/service.component.html)
- [AEM OSGi Configuration](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/content/implementing/deploying/configuring-osgi.html)
