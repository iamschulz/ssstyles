---
layout: index.njk
title: Spoiler
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/spoiler.css" data-button>{% svg "github-mark.svg" %} Source</a>

Spoilers can block out text until it's focused.

```css
@import "ssstyles/css/spoiler.css" layer(components);
```

```html
<span data-spoiler tabindex="0">Snape</span>
kills
<span data-spoiler tabindex="0">Trinity</span>
with
<span data-spoiler tabindex="0">Rosebud</span>.
```

<span data-spoiler tabindex="0">Snape</span>
kills
<span data-spoiler tabindex="0">Trinity</span>
with
<span data-spoiler tabindex="0">Rosebud</span>.
