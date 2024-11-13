---
layout: index.njk
title: View Transitions 4
nav:
    [
        { url: "/#components", text: "Back" },
        { url: "/view-transitions#one-element", text: "One element" },
        { url: "/view-transitions#multiple-elements", text: "Multiple elements" },
        { url: "/view-transitions#compatibility", text: "Compatibility" },
    ]
permalink: "/{{ title | slugify }}/index.html"
---

<script type="speculationrules">
{
  "prerender": [
    {
      "source": "list",
      "urls": ["/view-transitions"]
    }
  ]
}
</script>

```html
<article id="card-3" data-card data-view-transition style="--view-transition-name: card-3">
	<a data-card-link href="/view-transitions#card-3" aria-label="A generic card"></a>
	<header>Click me</header>
	<img
		alt="This is just a placeholder image with no meaningful content"
		data-card-background
		src="https://picsum.photos/id/345/1920/1080"
	/>
</article>
```

<article id="card-3" data-card data-view-transition style="--view-transition-name: card-3">
    <a data-card-link href="/view-transitions#card-3" aria-label="A generic card"></a>
    <header>Click me</header>
    <img alt="This is just a placeholder image with no meaningful content" data-card-background src="https://picsum.photos/id/345/1920/1080">
</article>
