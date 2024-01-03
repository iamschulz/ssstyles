---
layout: index.njk
title: Animations
nav: [
        { url: "/#components", text: "Back" },
        { url: "#sparkle", text: "Sparkle" },
        { url: "#fade-in", text: "Fade in" },
        # { url: "#view-transitions", text: "View Transitions" },
    ]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/animation.css" data-button>{% svg "github-mark.svg" %} Source</a>

This is a collection of pre-defined animations.

You need to import the CSS file and assign the data attribute to use them.

```css
@import "ssstyles/css/animations.css" layer(components);
```

## Sparkle

```html
I'm just a little bit <em data-sparkle>extra</em>
```

<p>I'm just a little bit <em data-sparkle>extra</em></p>

## Fade in

This animation lets the element fade in fron the bottom when scrolling into the viewport.

```html
<div data-card data-fade-in>Let the ruling classes tremble at a layered revolution.</div>
<div data-card data-fade-in>The element selectors have nothing to lose but their specificity.</div>
<div data-card data-fade-in>They have a stylesheet to win.</div>
```

<div data-card data-fade-in>Let the ruling classes tremble at a layered revolution.</div><br>
<div data-card data-fade-in>The element selectors have nothing to lose but their specificity.</div><br>
<div data-card data-fade-in>They have a document to win.</div>
