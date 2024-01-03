---
layout: index.njk
title: Breakout
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/breakout.css" data-button>{% svg "github-mark.svg" %} Source</a>

The breakout component will expand its background across the content area to the left and right edges of the viewport. You can control the color of the breakout with the value of the data attribute:

-   `bg`
-   `bg2`
-   `bg3`
-   `fg`
-   `fg2`
-   `accent`
-   `accent2`

Or you can define your own colors by setting `--col-breakout` for the background color and `color` for the font.

You need to import the CSS file and assign the data attribute to use it.

```css
@import "ssstyles/css/breakout.css" layer(components);
```

```html
<section data-breakout="accent2">
	<p>I've got a really, <em>really</em> important button for you:</p>
	<p><button>Clicky!</button></p>
</section>
```

<section data-breakout="accent2">
    <p>I've got a really, <em>really</em> important button for you:</p>
    <p><button>Clicky!</button></p>
</section>
