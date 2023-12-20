---
layout: index.njk
title: Skip Link
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

A skip link is a local link that allows users to skip past large link collections (like navigation menus) right to a content area. They're usually only visible when focused, which is why you're not seeing a demo here until you <kbd>tab</kbd> to the link below.

```html
<a data-skiplink href="#main">Skip to content</a>
```

<a data-skiplink href="#main">Skip to content</a>
