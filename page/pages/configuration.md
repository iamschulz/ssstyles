---
layout: index.njk
permalink: "/{{ title | slugify }}/index.html"
title: Configuration
nav:
    [
        { url: "/#configuration", text: "Back" },
        { url: "#layout-and-design", text: "Layout and Design" },
        { url: "#colors", text: "Colors" },
        { url: "#typography", text: "Typography" },
    ]
---

The stylesheet is configurable by a few custom properties.

## Layout and design

`--body-width` Sets the max width of the content area. It's default is `45rem`.

`--border-radius` Sets the border-radius of various elements, like buttons, forms, code snippets and more. It's set to `10px` by default.

## Colors

<div class="colors-demo">
    <div style="background:var(--col-bg)"></div>
    <div style="background:var(--col-bg2)"></div>
    <div style="background:var(--col-bg3)"></div>
    <div style="background:var(--col-fg)"></div>
    <div style="background:var(--col-fg2)"></div>
    <div style="background:var(--col-accent)"></div>
    <div style="background:var(--col-accent2)"></div>
    <div style="background:var(--col-accent-contrast)"></div>
</div>

`--col-bg`, `--col-bg2` and `--col-bg3` define background colors in three shades. Font colors are specified by `--col-fg` and `--col-fg2`. I use two accent colors to differeniate elements by color: `--col-accent` and `--col-accent2`, and a contrasting color to those: `--col-accent-contrast`.

Their default values are:

```css
--col-bg: #eee;
--col-bg2: #e8e8e8;
--col-bg3: #dfdfdf;
--col-fg: #333;
--col-fg2: #7c8386;
--col-accent: #b2033a;
--col-accent2: #1c618f;
--col-accent-contrast: #eee;
```

and for dark mode:

```css
--col-bg: #171b1e;
--col-bg2: #161e21;
--col-bg3: #1a2225;
--col-fg: #eee;
--col-fg2: #7c8386;
--col-accent: #ff297a;
--col-accent2: #72c4ff;
--col-accent-contrast: #111;
```

## Typography

This Stylesheet uses a system font stack, but you can insert your own fonts with `--font` and `--font-mono`.

```css
--font: Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;
--font-mono: Consolas, monaco, "Ubuntu Mono", "Liberation Mono", "Courier New", Courier, monospace;
```

You can also set `--font-accent`. This will apply to `<h1>` to `<h6>`, but default to `--font`, when unset. This should help you set a fancy font for your branding.

Font sizes are scaled dynamically to the viewport width. Larger screens get larger letters. You can manipulate their behaviour or switch font scaling off entirely with `--font-size-min` and `--font-size-max`.

```css
--font-size-min: 1rem;
--font-size-max: 1.2rem;
```

The remaining two variables regulate spaces between lines and characters:

```css
--line-height: 1.6;
--letter-spacing: 0.01875em;
```
