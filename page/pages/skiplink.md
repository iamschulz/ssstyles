---
layout: index.njk
title: Skip Link
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/skiplink.css" data-button>{% svg "github-mark.svg" %} Source</a>

A skip link is a local link that allows users to skip past large link collections (like navigation menus) right to a content area. They're usually only visible when focused, which is why you're not seeing a demo here until you <kbd>tab</kbd> to the link below.

You need to import the CSS file and assign the data attribute to use it.

```css
@import "ssstyles/skiplink.css" layer(components);
```

```html
<a data-skiplink href="#main">Skip to content</a>
```

<a data-skiplink href="#main">Skip to content</a>
