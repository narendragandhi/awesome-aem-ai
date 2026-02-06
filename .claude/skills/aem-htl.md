---
description: HTL (HTML Template Language) best practices for AEM development
---

# AEM HTL Best Practices

## Core Principles

1. **Context-aware escaping** - HTL automatically escapes output based on context (HTML, URI, JS, etc.)
2. **Separation of concerns** - Logic in Sling Models/Use objects, presentation in HTL
3. **No scriptlets** - Never use JSP-style scriptlets; use data-sly-* attributes

## Common Patterns

### Data Binding with Sling Models
```html
<sly data-sly-use.model="com.example.core.models.ComponentModel">
    <h1>${model.title}</h1>
    <p>${model.description}</p>
</sly>
```

### Conditionals
```html
<div data-sly-test="${model.showBanner}">
    <img src="${model.bannerImage}" alt="${model.bannerAlt}">
</div>

<!-- With else -->
<sly data-sly-test.hasItems="${model.items.size > 0}">
    <ul data-sly-list.item="${model.items}">
        <li>${item.name}</li>
    </ul>
</sly>
<p data-sly-test="${!hasItems}">No items found.</p>
```

### Iteration
```html
<ul data-sly-list.item="${model.items}">
    <li data-sly-test="${itemList.first}" class="first">${item.name}</li>
    <li data-sly-test="${!itemList.first && !itemList.last}">${item.name}</li>
    <li data-sly-test="${itemList.last}" class="last">${item.name}</li>
</ul>

<!-- With index -->
<div data-sly-repeat.card="${model.cards}">
    <div class="card card-${cardList.index}">${card.title}</div>
</div>
```

### Including Components
```html
<!-- Include another component -->
<sly data-sly-resource="${'header' @ resourceType='myproject/components/header'}"/>

<!-- Include with selectors -->
<sly data-sly-resource="${'content' @ selectors='mobile'}"/>

<!-- Include child resources -->
<div data-sly-resource="${item.path}"></div>
```

### Templates and Calls
```html
<!-- Define template -->
<template data-sly-template.card="${@ title, description, link}">
    <div class="card">
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="${link}">Read more</a>
    </div>
</template>

<!-- Call template -->
<sly data-sly-call="${card @ title=item.title, description=item.desc, link=item.url}"/>
```

### External Templates
```html
<!-- In /apps/myproject/components/templates/cards.html -->
<template data-sly-template.card="${@ item}">
    <div class="card">${item.title}</div>
</template>

<!-- Usage -->
<sly data-sly-use.templates="templates/cards.html">
    <sly data-sly-list.item="${model.items}">
        <sly data-sly-call="${templates.card @ item=item}"/>
    </sly>
</sly>
```

## Display Context

```html
<!-- Default HTML escaping -->
${properties.text}

<!-- Explicit contexts -->
${properties.richText @ context='html'}      <!-- Allow HTML -->
${properties.url @ context='uri'}            <!-- URI encoding -->
${properties.script @ context='scriptString'} <!-- JS string -->
${properties.attr @ context='attribute'}     <!-- Attribute value -->
${properties.raw @ context='unsafe'}         <!-- No escaping (avoid!) -->
```

## i18n Internationalization

```html
<h1>${'Welcome' @ i18n}</h1>
<p>${'Hello {0}' @ i18n, format=model.userName}</p>

<!-- With locale hint -->
<span>${'Submit' @ i18n, locale='fr'}</span>
```

## Common Anti-patterns to Avoid

1. **Don't put logic in HTL** - Move to Sling Models
2. **Don't use `unsafe` context** - Security risk
3. **Don't deeply nest data-sly-test** - Extract to model methods
4. **Don't repeat resource type strings** - Use constants or templates
5. **Don't ignore null checks** - Use `data-sly-test` before accessing

## File Structure

```
/apps/myproject/components/mycomponent/
├── mycomponent.html          # Main HTL file
├── _cq_dialog/.content.xml   # Dialog definition
├── _cq_editConfig.xml        # Edit configuration
└── clientlibs/               # Component-specific clientlibs
```

## References

- [HTL Specification](https://github.com/adobe/htl-spec)
- [HTL Getting Started](https://experienceleague.adobe.com/docs/experience-manager-htl/content/getting-started.html)
- [HTL Block Statements](https://experienceleague.adobe.com/docs/experience-manager-htl/content/block-statements.html)
