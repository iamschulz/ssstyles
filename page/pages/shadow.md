---
layout: index.njk
title: Shadow
nav:
    [
        { url: "/#components", text: "Back" },
        { url: "#shadow-levels", text: "Shadow Levels" },
        { url: "#hover", text: "Hover" },
    ]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/shadow.css" data-button>{% svg "github-mark.svg" %} Source</a>

The shadow component will allow you to use a pleasing box-shadow in five levels of size. The shadow size is calculated from the custom property `--shadow-level`, in case you need to add your own values.

Prepending the level with `-hover` will increase it's level on hover by 1.

You need to import the CSS file and assign the data attribute to use it.

```css
@import "ssstyles/css/shadow.css" layer(components);
```

## Shadow levels

```html
<div data-shadow="1"></div>
<div data-shadow="2"></div>
<div data-shadow="3"></div>
<div data-shadow="4"></div>
<div data-shadow="5"></div>
```

<div class="demo-shadow" data-shadow="1"><code>data-shadow="1"</code></div>
<div class="demo-shadow" data-shadow="2"><code>data-shadow="2"</code></div>
<div class="demo-shadow" data-shadow="3"><code>data-shadow="3"</code></div>
<div class="demo-shadow" data-shadow="4"><code>data-shadow="4"</code></div>
<div class="demo-shadow" data-shadow="5"><code>data-shadow="5"</code></div>

## Hover

```html
<div data-shadow="3-hover"></div>
```

<div class="demo-shadow" data-shadow="3-hover"><code>data-shadow="3-hover"</code></div>
