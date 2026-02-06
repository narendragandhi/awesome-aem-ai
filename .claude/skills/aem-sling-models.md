---
description: Sling Models development patterns and best practices for AEM
---

# AEM Sling Models Best Practices

## Core Concepts

Sling Models map JCR resources to POJOs using annotations. They provide clean separation between data access and presentation.

## Basic Model Structure

```java
package com.example.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class HeroModel {

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String description;

    @ValueMapValue(name = "fileReference")
    private String imagePath;

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getImagePath() {
        return imagePath;
    }
}
```

## Interface-based Models (Recommended)

```java
// Interface
package com.example.core.models;

import org.osgi.annotation.versioning.ConsumerType;

@ConsumerType
public interface Hero {
    String getTitle();
    String getDescription();
    String getImagePath();
    boolean isEmpty();
}

// Implementation
package com.example.core.models.impl;

import com.example.core.models.Hero;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.*;

@Model(
    adaptables = SlingHttpServletRequest.class,
    adapters = Hero.class,
    resourceType = HeroImpl.RESOURCE_TYPE,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class HeroImpl implements Hero {

    protected static final String RESOURCE_TYPE = "myproject/components/hero";

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String description;

    @ValueMapValue(name = "fileReference")
    private String imagePath;

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public String getImagePath() {
        return imagePath;
    }

    @Override
    public boolean isEmpty() {
        return StringUtils.isBlank(title) && StringUtils.isBlank(imagePath);
    }
}
```

## Common Injector Annotations

```java
// Value from resource properties
@ValueMapValue
private String title;

// With default value
@ValueMapValue
@Default(values = "Default Title")
private String title;

// Child resource
@ChildResource
private Resource image;

// List of child resources
@ChildResource
private List<Resource> items;

// Inject OSGi service
@OSGiService
private ModelFactory modelFactory;

// Request attribute
@RequestAttribute
private String paramName;

// Scripting bindings
@ScriptVariable
private Page currentPage;

@ScriptVariable
private Designer currentDesign;

// Self reference
@Self
private SlingHttpServletRequest request;

@Self
private Resource resource;

// Sling object
@SlingObject
private ResourceResolver resourceResolver;

// Context-aware configuration
@ContextAwareConfiguration
private MyConfig config;
```

## Post-Construct Initialization

```java
@Model(adaptables = Resource.class)
public class ComplexModel {

    @ValueMapValue
    private String[] tags;

    @OSGiService
    private TagManager tagManager;

    private List<Tag> resolvedTags;

    @PostConstruct
    protected void init() {
        resolvedTags = new ArrayList<>();
        if (tags != null && tagManager != null) {
            for (String tagId : tags) {
                Tag tag = tagManager.resolve(tagId);
                if (tag != null) {
                    resolvedTags.add(tag);
                }
            }
        }
    }

    public List<Tag> getTags() {
        return Collections.unmodifiableList(resolvedTags);
    }
}
```

## Delegation Pattern

```java
@Model(
    adaptables = SlingHttpServletRequest.class,
    adapters = Teaser.class,
    resourceType = CustomTeaserImpl.RESOURCE_TYPE
)
public class CustomTeaserImpl implements Teaser {

    static final String RESOURCE_TYPE = "myproject/components/teaser";

    @Self
    @Via(type = ResourceSuperType.class)
    private Teaser delegate;

    @Override
    public String getTitle() {
        // Custom logic
        String title = delegate.getTitle();
        return StringUtils.upperCase(title);
    }

    // Delegate other methods
    @Override
    public String getDescription() {
        return delegate.getDescription();
    }

    // Export all methods via delegate
    @Delegate(excludes = DelegationExclusion.class)
    private Teaser getDelegateTeaser() {
        return delegate;
    }

    private interface DelegationExclusion {
        String getTitle();
    }
}
```

## Multifield Handling

```java
@Model(adaptables = Resource.class)
public class CardListModel {

    @ChildResource
    private List<CardItem> cards;

    public List<CardItem> getCards() {
        return cards != null ? cards : Collections.emptyList();
    }

    @Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
    public static class CardItem {
        @ValueMapValue
        private String title;

        @ValueMapValue
        private String link;

        public String getTitle() { return title; }
        public String getLink() { return link; }
    }
}
```

## Exporter for JSON

```java
@Model(
    adaptables = Resource.class,
    adapters = { DataModel.class, ComponentExporter.class },
    resourceType = DataModelImpl.RESOURCE_TYPE
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class DataModelImpl implements DataModel, ComponentExporter {

    static final String RESOURCE_TYPE = "myproject/components/data";

    @ValueMapValue
    private String title;

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
```

## Testing Sling Models

```java
@ExtendWith(AemContextExtension.class)
class HeroModelTest {

    private final AemContext ctx = new AemContext();

    @BeforeEach
    void setUp() {
        ctx.addModelsForClasses(HeroImpl.class);
        ctx.load().json("/hero.json", "/content/hero");
    }

    @Test
    void testGetTitle() {
        Resource resource = ctx.resourceResolver().getResource("/content/hero");
        Hero hero = resource.adaptTo(Hero.class);

        assertNotNull(hero);
        assertEquals("Expected Title", hero.getTitle());
    }
}
```

## Best Practices

1. **Use interfaces** - Separate contract from implementation
2. **Specify resourceType** - Enables Exporter and proper delegation
3. **Use OPTIONAL injection** - Avoid NPEs with missing properties
4. **Implement isEmpty()** - Help HTL determine if component should render
5. **Keep models focused** - One model per component, single responsibility
6. **Avoid business logic** - Use OSGi services for complex operations
7. **Cache expensive operations** - Compute once in @PostConstruct

## References

- [Sling Models Documentation](https://sling.apache.org/documentation/bundles/models.html)
- [AEM Core Components Models](https://github.com/adobe/aem-core-wcm-components)
