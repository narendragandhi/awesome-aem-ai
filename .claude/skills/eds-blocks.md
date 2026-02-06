---
description: Edge Delivery Services (EDS) block development best practices
---

# Edge Delivery Services Block Development

## Block Structure

```
/blocks/
└── myblock/
    ├── myblock.js      # Block JavaScript
    └── myblock.css     # Block styles
```

## Basic Block Template

### JavaScript (myblock.js)
```javascript
export default function decorate(block) {
  // block is the DOM element with class 'myblock'
  const rows = [...block.children];

  rows.forEach((row, index) => {
    const cols = [...row.children];
    // Process each column
    cols.forEach((col, colIndex) => {
      col.classList.add(`col-${colIndex + 1}`);
    });
  });
}
```

### CSS (myblock.css)
```css
.myblock {
  padding: 32px;
}

.myblock > div {
  display: flex;
  gap: 24px;
}

.myblock .col-1 {
  flex: 1;
}

.myblock .col-2 {
  flex: 2;
}
```

## Common Block Patterns

### Cards Block
```javascript
export default function decorate(block) {
  const cards = [...block.children];

  block.classList.add('cards-container');

  cards.forEach((card) => {
    card.classList.add('card');

    const [imageCol, contentCol] = [...card.children];

    if (imageCol) {
      imageCol.classList.add('card-image');
      const img = imageCol.querySelector('img');
      if (img) {
        img.loading = 'lazy';
      }
    }

    if (contentCol) {
      contentCol.classList.add('card-content');
      const heading = contentCol.querySelector('h2, h3, h4');
      if (heading) {
        heading.classList.add('card-title');
      }
    }
  });
}
```

### Tabs Block
```javascript
export default function decorate(block) {
  const tablist = document.createElement('div');
  tablist.className = 'tabs-list';
  tablist.setAttribute('role', 'tablist');

  const tabs = [...block.children];

  tabs.forEach((tab, index) => {
    const [labelCol, contentCol] = [...tab.children];
    const id = `tab-${index}`;

    // Create tab button
    const button = document.createElement('button');
    button.className = 'tabs-tab';
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', index === 0);
    button.setAttribute('aria-controls', `panel-${id}`);
    button.textContent = labelCol.textContent;
    button.addEventListener('click', () => selectTab(block, index));
    tablist.appendChild(button);

    // Setup panel
    tab.className = 'tabs-panel';
    tab.setAttribute('role', 'tabpanel');
    tab.setAttribute('id', `panel-${id}`);
    tab.hidden = index !== 0;
    tab.innerHTML = contentCol.innerHTML;
  });

  block.prepend(tablist);
}

function selectTab(block, index) {
  const tabs = block.querySelectorAll('.tabs-tab');
  const panels = block.querySelectorAll('.tabs-panel');

  tabs.forEach((tab, i) => {
    tab.setAttribute('aria-selected', i === index);
  });

  panels.forEach((panel, i) => {
    panel.hidden = i !== index;
  });
}
```

### Carousel Block
```javascript
export default function decorate(block) {
  const slides = [...block.children];
  const wrapper = document.createElement('div');
  wrapper.className = 'carousel-wrapper';

  slides.forEach((slide, index) => {
    slide.classList.add('carousel-slide');
    slide.dataset.index = index;
    wrapper.appendChild(slide);
  });

  block.innerHTML = '';
  block.appendChild(wrapper);

  // Navigation
  const nav = document.createElement('div');
  nav.className = 'carousel-nav';
  nav.innerHTML = `
    <button class="carousel-prev" aria-label="Previous">&#8249;</button>
    <button class="carousel-next" aria-label="Next">&#8250;</button>
  `;
  block.appendChild(nav);

  let current = 0;

  nav.querySelector('.carousel-prev').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    updateCarousel(wrapper, current);
  });

  nav.querySelector('.carousel-next').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    updateCarousel(wrapper, current);
  });
}

function updateCarousel(wrapper, index) {
  wrapper.style.transform = `translateX(-${index * 100}%)`;
}
```

## Async Block Loading

```javascript
export default async function decorate(block) {
  const response = await fetch('/api/data.json');
  const data = await response.json();

  const list = document.createElement('ul');
  data.items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.name;
    list.appendChild(li);
  });

  block.textContent = '';
  block.appendChild(list);
}
```

## Block Variants

Document-based variants using block name modifiers:

| Block Name in Document | CSS Classes Applied |
|------------------------|---------------------|
| Cards | `cards` |
| Cards (featured) | `cards featured` |
| Cards (three-up, centered) | `cards three-up centered` |

```javascript
export default function decorate(block) {
  // Check for variants
  if (block.classList.contains('featured')) {
    // Featured variant logic
  }

  if (block.classList.contains('three-up')) {
    // Three column layout
  }
}
```

## Using lib-franklin Utilities

```javascript
import {
  createOptimizedPicture,
  decorateIcons,
  loadCSS,
  toClassName,
} from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  // Optimize images
  block.querySelectorAll('img').forEach((img) => {
    const picture = createOptimizedPicture(img.src, img.alt, false, [
      { width: '750' },
    ]);
    img.parentElement.replaceWith(picture);
  });

  // Decorate icons (converts :icon-name: to SVG)
  decorateIcons(block);
}
```

## Auto-blocking from Metadata

In `scripts/scripts.js`:
```javascript
function buildAutoBlocks(main) {
  const heroImage = main.querySelector('picture');
  if (heroImage && heroImage.closest('div') === main.querySelector(':scope > div:first-child')) {
    const section = heroImage.closest('div');
    const heroBlock = buildBlock('hero', { elems: [heroImage] });
    section.prepend(heroBlock);
  }
}
```

## Performance Best Practices

```javascript
export default function decorate(block) {
  // Lazy load images
  block.querySelectorAll('img').forEach((img) => {
    img.loading = 'lazy';
  });

  // Use IntersectionObserver for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });

  block.querySelectorAll('.animate').forEach((el) => observer.observe(el));
}
```

## Spreadsheet Data Integration

```javascript
async function fetchSpreadsheetData(path) {
  const response = await fetch(`${path}.json`);
  const json = await response.json();
  return json.data;
}

export default async function decorate(block) {
  const link = block.querySelector('a');
  if (link) {
    const data = await fetchSpreadsheetData(link.getAttribute('href'));
    // Build UI from spreadsheet data
    const list = document.createElement('ul');
    data.forEach((row) => {
      const li = document.createElement('li');
      li.textContent = row.title;
      list.appendChild(li);
    });
    block.replaceChildren(list);
  }
}
```

## Testing Blocks

```javascript
// test/blocks/myblock.test.js
import { expect } from '@esm-bundle/chai';
import decorate from '../../blocks/myblock/myblock.js';

describe('MyBlock', () => {
  it('decorates correctly', () => {
    const block = document.createElement('div');
    block.innerHTML = '<div><div>Content</div></div>';

    decorate(block);

    expect(block.querySelector('.col-1')).to.exist;
  });
});
```

## File Structure

```
/
├── blocks/
│   ├── header/
│   ├── footer/
│   ├── cards/
│   └── hero/
├── scripts/
│   ├── scripts.js
│   ├── lib-franklin.js
│   └── delayed.js
├── styles/
│   ├── styles.css
│   └── fonts.css
└── head.html
```

## References

- [AEM Block Collection](https://www.aem.live/developer/block-collection)
- [EDS Developer Tutorial](https://www.aem.live/developer/tutorial)
- [Franklin Library](https://github.com/adobe/aem-lib)
