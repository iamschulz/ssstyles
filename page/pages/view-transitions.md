---
layout: index.njk
title: View Transitions
nav:
    [
        { url: "/#components", text: "Back" },
        { url: "#one-element", text: "One element" },
        { url: "#multiple-elements", text: "Multiple elements" },
        { url: "#compatibility", text: "Compatibility" },
    ]
permalink: "/{{ title | slugify }}/index.html"
---

<script type="speculationrules">
{
  "prerender": [
    {
      "source": "list",
      "urls": ["/view-transitions-2", "/view-transitions-3", "/view-transitions-4"]
    }
  ]
}
</script>

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/viewtransitions.css" data-button>{% svg "github-mark.svg" %} Source</a>

View Transitions can animate elements across page navigations. With this you can transition one page to another. This component adds such a transition to an element.

You can define the transition duration with the custom property `--view-transition-duration: <time>`. It defaults to `0.4s`.

## One element

```css
@import "ssstyles/css/view-transitions.css" layer(components);
```

```html
<article id="card-1" data-card data-view-transition>
	<a data-card-link href="/view-transitions-2#card-1" aria-label="A generic card"></a>
	<header>Click me</header>
	<img
		alt="This is just a placeholder image with no meaningful content"
		data-card-background
		src="https://picsum.photos/id/123/480/270"
	/>
</article>
```

<article id="card-1" data-card data-view-transition>
    <a data-card-link href="/view-transitions-2#card-1" aria-label="A generic card"></a>
    <header>Click me</header>
    <img alt="This is just a placeholder image with no meaningful content" data-card-background src="https://picsum.photos/id/123/480/270">
</article>

## Multiple elements

This component supports one transitioning element per page out of the box. If you want to transition more than one, you need to define the custom property `--view-transition-name` with a unique value on each of them:

```html
<article id="card-2" data-card data-view-transition style="--view-transition-name: card-2">
	<a data-card-link href="/view-transitions-2#card-2" aria-label="A generic card"></a>
	<header>Click me</header>
	<img
		alt="This is just a placeholder image with no meaningful content"
		data-card-background
		src="https://picsum.photos/id/234/480/270"
	/>
</article>

<article id="card-3" data-card data-view-transition style="--view-transition-name: card-3">
	<a data-card-link href="/view-transitions-2#card-3" aria-label="A generic card"></a>
	<header>Click me</header>
	<img
		alt="This is just a placeholder image with no meaningful content"
		data-card-background
		src="https://picsum.photos/id/345/480/270"
	/>
</article>
```

<div data-group>
<article id="card-2" data-card data-view-transition style="--view-transition-name: card-2">
    <a data-card-link href="/view-transitions-3#card-2" aria-label="A generic card"></a>
    <header>Click me</header>
    <img alt="This is just a placeholder image with no meaningful content" data-card-background src="https://picsum.photos/id/234/240/135">
</article>

<article id="card-3" data-card data-view-transition style="--view-transition-name: card-3">
    <a data-card-link href="/view-transitions-4#card-3" aria-label="A generic card"></a>
    <header>Click me</header>
    <img alt="This is just a placeholder image with no meaningful content" data-card-background src="https://picsum.photos/id/345/240/135">
</article>
</div>

## Compatibility

[View transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/@view-transition) are a fairly new feature and not all browsers may support it. Please make sure that no important content is hidden in a view transition. Refer to a [browser support chart](https://developer.mozilla.org/en-US/docs/Web/CSS/@view-transition#browser_compatibility) to review the browser adoption rate. Unsupported browsers will simply show the new page without a transition.

This component uses [scroll-based animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline) to determine if an element is inside the viewport to trigger page transitions. This prevents the site from having elements flying in from outside the visible area. If scroll-based animations are not [available in your browser](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline#browser_compatibility), the element will animate regardless of its viewport position.

Please be aware that view transitions create a new stacking context. This may lead to bugs when combined with `z-index` or stacked positioning.
