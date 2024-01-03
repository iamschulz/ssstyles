---
layout: index.njk
title: Action Link
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/actionlink.css" data-button>{% svg "github-mark.svg" %} Source</a>

The action link is a circular link at the bottom right-hand corner of the viewport.

You need to import the CSS file and assign the data attribute to use it.

```css
@import "ssstyles/actionlink.css" layer(components);
```

```html
<a data-actionlink data-shadow="2-hover" href="#top">To top</a>
```

<a data-actionlink data-shadow="2-hover" href="#top">To top</a>

This will also work with a `<button>`.
