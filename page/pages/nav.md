---
layout: index.njk
title: Nav
nav: [
	{ url: "/#components", text: "Back" },
	{ url: "#", text: "Just" },
	{ url: "#", text: "some" },
	{ url: "#", text: "placeholder" },
	{ url: "#", text: "links" },
]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/nav.css" data-button>{% svg "github-mark.svg" %} Source</a>

This is supposed to be a site navigation. The list styles are removed from the `<ul>` and links are printed in bold.

You need to import the CSS file and assign the data attribute to use it.

```css
@import "ssstyles/css/nav.css" layer(components);
```

<br>

```html
<nav data-nav>
	<ul>
		<li><a href="/">Back</a></li>
		<li><a href="#">Just</a></li>
		<li><a href="#">some</a></li>
		<li><a href="#">placeholder</a></li>
		<li><a href="#">link</a></li>
	</ul>
</nav>
```

Please note that this components does **not** handle the placement to the side when there's enough space. That's part of the [Base Grid](http://localhost:8080/layout/#base-grid).
