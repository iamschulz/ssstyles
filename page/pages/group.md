---
layout: index.njk
title: Group
nav:
    [
        { url: "/#components", text: "Back" },
        { url: "#vertical-stack", text: "Vertical Stack" },
        { url: "#mixed-elements", text: "Mixed Elements" },
        { url: "#stacked-groups", text: "Stacked Groups" },
    ]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/group.css" data-button>{% svg "github-mark.svg" %} Source</a>

This component allows you to group elements together.

You need to import the CSS file and assign the data attribute to use it.

```css
@import "ssstyles/css/group.css" layer(components);
```

Items are grouped horizontally by default.

```html
<div data-group>
	<button><b>Bold</b></button>
	<button><i>Italic</i></button>
	<button><u>Underline</u></button>
</div>
```

<div data-group>
    <button><b>Bold</b></button>
    <button><i>Italic</i></button>
    <button><u>Underline</u></button>
</div>

## Vertical Stack

You can stack elements vertically, if you add the value `vertical` to the data attribute.

```html
<div data-group="vertical">
	<article data-card>Top Bun</article>
	<article data-card>Cheese</article>
	<article data-card>Patty</article>
	<article data-card>Salad</article>
	<article data-card>Bottom Bun</article>
</div>
```

<div class="demo-group" data-group="vertical">
    <article data-card>Top Bun</article>
    <article data-card>Cheese</article>
    <article data-card>Patty</article>
    <article data-card>Salad</article>
    <article data-card>Bottom Bun</article>
</div>

You can use `<details>`/`<summary>` in a vertical group to create an accordeon:

```css
<div data-group="vertical">
    <details name="heynow" open>
        <summary>Some<strong>body</strong> once told me</summary>
        <p>The world is gonna roll me</p>
    </details>
    <details name="heynow">
        <summary>I ain't</summary>
        <p>The sharpest tool in the shed ✄</p>
    </details>
</div>
```

<div data-group="vertical">
    <details name="heynow" open>
        <summary>Some<strong>body</strong> once told me</summary>
        <p>The world is gonna roll me</p>
    </details>
    <details name="heynow">
        <summary>I ain't...</summary>
        <p>The sharpest tool in the shed ✄</p>
    </details>
</div>

## Mixed Elements

You can also group mixed elements to create new UI patterns.

```html
<div data-group>
	<input type="text" placeholder="Type here" />
	<button>Go!</button>
</div>
```

<div class="demo-group" data-group>
    <input type="text" placeholder="Type here">
    <button>Go!</button>
</div>

## Stacked Groups

Yo dawg! I put a group in your group.

```html
<div data-group>
	<div data-group="vertical">
		<article data-card>Top Bun</article>
		<article data-card>Cheese</article>
		<article data-card>Patty</article>
		<article data-card>Salad</article>
		<article data-card>Bottom Bun</article>
	</div>
	<textarea>Add more ingredients to your burger!</textarea>
	<button>Nomnom!</button>
</div>
```

<div class="demo-group" data-group>
    <div data-group="vertical">
        <article data-card>Top Bun</article>
        <article data-card>Cheese</article>
        <article data-card>Patty</article>
        <article data-card>Salad</article>
        <article data-card>Bottom Bun</article>
    </div>
    <textarea>Add more ingredients to your burger!</textarea>
    <button>Nomnom!</button>
</div>
