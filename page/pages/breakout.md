---
layout: index.njk
title: Breakout
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/breakout.css" data-button>{% svg "github-mark.svg" %} Source</a>

The breakout component will expand its background across the content area to the left and right edges of the viewport.

```html
<section data-breakout>Your content goes here.</section>
```

<style>
    .demo {
        color: var(--col-bg);
        background-color: var(--col-fg);
    }
</style>

<section data-breakout class="demo">
    <p>I've got a really, <em>really</em> important button for you:</p>
    <button>Clicky!</button>
</section>

See, now it's got your attention!
