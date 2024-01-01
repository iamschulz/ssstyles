---
layout: index.njk
title: Carousel
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/carousel.css" data-button>{% svg "github-mark.svg" %} Source</a>

A carousel is a UX element that scrolls its content horizontally. It will auto-stop your scrolling when the next element is reached. You can tell it to anchor its elements to the left or right by calling `data-carousel="left"` or `data-carousel="right"`, respectively. Anchroing at the center is the default behavior.

```html
<div data-carousel tabindex="0">
	<div data-card>Hi!</div>
	<div data-card>I just met you</div>
	<div data-card>And this is crazy</div>
	<div data-card>But here's my slider</div>
	<div data-card>So scroll me maybe</div>
</div>
```

<br>
<div data-carousel tabindex="0" class="demo-carousel">
    <div data-card>Hi!</div>
    <div data-card>I just met you</div>
    <div data-card>And this is crazy</div>
    <div data-card>But here's my slider</div>
    <div data-card>So scroll me maybe</div>
</div>

Please don't forget to set a `tabindex` to your `[data-carousel]` element, to enable keyboard navigation.
