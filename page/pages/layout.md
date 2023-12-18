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

The base grid is the basic layout of the site. It supports a header, a navigation below and a footer on the bottom. The rest of the viewport is taken up by the main content area, which can expand to accommodate its content.

On large viewports, the navigation snaps to the right side of the content area. You don't need to add a data attribute to anything. As soon as you import the `basegrid.css`, it will automatically apply to the document.

<input type="checkbox" data-toggle id="base-grid-vis" /> <label for="base-grid-vis">Visualize the base grid</label>

<script>
    document.querySelector('#base-grid-vis').addEventListener('change', (e) => {
        document.body.classList.toggle('demo', e.target.checked);
    });
</script>

<style>
    body.demo > :is(header, footer, nav, main, aside) {
        outline: 2px dashed var(--col-accent);
        outline-offset: -1px;
        position: relative;

        &::after {
            position: fixed;
            inset: calc(50% - 5ch);
            font-size: 1.5rem;
            font-family: var(--font-mono);
            background: var(--col-accent2);
            color: var(--col-accent-contrast);
            display: none;
            place-items: center;
            z-index: 10;
        }

        &::before {
                content: "";
                position: absolute;
                inset: 0;
                background-color: var(--col-accent2);
                opacity: 0.2;
                display: none;
                z-index: 9;
                pointer-events: none;
            }

        &:hover {
            &::before, &::after {
                display: inline-grid;
            }
        }
    }

    body.demo {
        > header::after { content: "header" }
        > footer::after { content: "footer" }
        > nav::after { content: "nav" }
        > main::after { content: "main" }
        > aside::after { content: "aside" }
    }
</style>

## Auto grid

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

The flex grid will spread its children evenly across the availbale space. It will line-break if necessary and automatically fill uo the next line.

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
