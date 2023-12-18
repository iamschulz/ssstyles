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

This is supposed to be a site navigation. The list styles are removed from the `<ul>` and links are printed in bold.

```html
<nav data-nav>
	<ul>
		<li><a href="#">Navigation Entry 1</a></li>
		<li><a href="#">Navigation Entry 2</a></li>
		<li><a href="#">Navigation Entry 3</a></li>
	</ul>
</nav>
```

Please note that this components does **not** handle the placement to the side when there's enough space. That's part of the [Base Grid](http://localhost:8080/layout/#base-grid).
