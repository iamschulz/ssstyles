---
layout: index.njk
title: Layout
nav:
    [
        { url: "/#components", text: "Back" },
        { url: "#basegrid", text: "Base grid" },
        { url: "#autogrid", text: "Auto grid" },
        { url: "#flexgrid", text: "Flex grid" },
    ]
permalink: "/{{ title | slugify }}/index.html"
---

The layout components don't style elements on itself, but provide a pattern for containers to arrange their children.

## Base grid

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/basegrid.css" data-button>{% svg "github-mark.svg" %} Source</a>

The base grid is the basic layout of the site. It supports a header, a navigation below and a footer on the bottom. The rest of the viewport is taken up by the main content area, which can expand to accommodate its content.

On large viewports, the navigation snaps to the right side of the content area. You don't need to add a data attribute to anything. As soon as you import the `basegrid.css`, it will automatically apply to the document.

<input type="checkbox" data-toggle id="base-grid-vis"> <label for="base-grid-vis">Visualize the base grid</label>

You can configure the basegrid yourself by editing the values of those variables:

```css
:root {
	--basegrid: "header ." "nav side" "content side" "footer .";
	--basegrid-rows: max-content max-content auto max-content;
	--basegrid-cols: calc(100% - 1rem) 20ch;
}
```

<aside data-callout>
<header><h3>Breakpoints are dangerous</h3></header>
<p>Please notice that the media query that breaks the navigation out to the side will not adhere to the <code>--body-width</code> variable. It is set to <code>85rem</code>. Increasing <code>--body-width</code> without overwriting the media query might break things.</p>
</aside>

<script>
    document.querySelector('#base-grid-vis').addEventListener('change', (e) => {
        document.body.classList.toggle('demo-layout', e.target.checked);
    });
</script>

## Auto grid

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/autogrid.css" data-button>{% svg "github-mark.svg" %} Source</a>

The auto grid divides its children into groups of 2, 3 or 4, depending on what you write into the data attribute. The children will be fitted into the viewport based on available space.

```html
<div data-autogrid="1/3">
	<div data-card>What</div>
	<div data-card>is</div>
	<div data-card>love?</div>
</div>
```

<div data-autogrid="1/3">
    <div data-card>What</div>
    <div data-card>is</div>
    <div data-card>love?</div>
</div>
<br>

```html
<div data-autogrid="1/4">
	<div data-card>Baby</div>
	<div data-card>don't</div>
	<div data-card>hurt</div>
	<div data-card>me</div>
</div>
```

<div data-autogrid="1/4">
    <div data-card>Baby</div>
    <div data-card>don't</div>
    <div data-card>hurt</div>
    <div data-card>me</div>
</div>
<br>

```html
<div data-autogrid="1/2">
	<div data-card>Oh</div>
	<div data-card>no</div>
</div>
```

<div data-autogrid="1/2">
    <div data-card>Oh</div>
    <div data-card>no</div>
</div>

## Flex grid

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/flexgrid.css" data-button>{% svg "github-mark.svg" %} Source</a>

The flex grid will spread its children evenly across the availbale space. It will line-break if necessary and automatically fill up the next line.

```html
<div data-flexgrid>
	<div data-card>What is love?</div>
	<div data-card>Baby don't hurt me</div>
	<div data-card>Oh no</div>
</div>
```

<div data-flexgrid>
    <div data-card>What is love?</div>
    <div data-card>Baby don't hurt me</div>
    <div data-card>Oh no</div>
</div>
