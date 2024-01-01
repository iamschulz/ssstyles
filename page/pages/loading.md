---
layout: index.njk
title: Loading
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/loading.css" data-button>{% svg "github-mark.svg" %} Source</a>

This is a simple loading spinner in a `::before` pseudo element.

```html
<div data-loading>Loading</div>
```

<div data-loading>Loading</div>

<br>

But it can also be used on a `<button>`. Buttons can even use the loading indicator with `aria-busy="true"`.

```html
<button aria-busy="true" disabled>Working...</button>
```

<button aria-busy="true" disabled>Working...</button>