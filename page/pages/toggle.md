---
layout: index.njk
title: Toggle
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/toggle.css" data-button>{% svg "github-mark.svg" %} Source</a>

The toggle is really just a fancy checkbox, but it's better suited to convey the state of a thing.

```html
<input type="checkbox" data-toggle id="toggle" /> <label for="toggle">Pull the switch!</label>
```

<input type="checkbox" data-toggle id="toggle" /> <label for="toggle">Pull the switch!</label>

```html
<input type="checkbox" data-toggle disabled id="notoggle" /> <label for="notoggle">Don't pull the switch!</label>
```

<input type="checkbox" disabled data-toggle id="notoggle" /> <label for="notoggle">Don't pull the switch!</label>
