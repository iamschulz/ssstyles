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

<style>
    [data-card] {
        background: var(--col-bg3);
    }
</style>

```html
<div data-group="vertical">
	<article data-card>Top Bun</article>
	<article data-card>Cheese</article>
	<article data-card>Patty</article>
	<article data-card>Salad</article>
	<article data-card>Bottom Bun</article>
</div>
```

<div data-group="vertical">
    <article data-card>Top Bun</article>
    <article data-card>Cheese</article>
    <article data-card>Patty</article>
    <article data-card>Salad</article>
    <article data-card>Bottom Bun</article>
</div>

## Mixed Elements

You can also group mixed elements to create your new UIs.

```html
<div data-group>
	<article data-card>Rocket Ship</article>
	<button>Launch!</button>
</div>
```

<div data-group>
    <article data-card>Rocket Ship</article>
    <button>Launch!</button>
</div>

```html
<div data-group>
	<input type="text" placeholder="Type here" />
	<button>Go!</button>
</div>
```

<div data-group>
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
