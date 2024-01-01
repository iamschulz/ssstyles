---
layout: index.njk
title: Card
nav:
    [
        { url: "/#components", text: "Back" },
        { url: "#with-content", text: "With content" },
        { url: "#with-image-and-caption", text: "With image and caption" },
        { url: "#with-header-image-and-link", text: "With header, image and link" },
        { url: "#combined-with-shadow", text: "Combined with shadow" },
    ]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/card.css" data-button>{% svg "github-mark.svg" %} Source</a>

This component will render a card. It can have a header, content, background image and full-size link. Here are some examples:

## With content

```html
<article data-card>
	<header>Another card</header>
	<p>Lorem Ipsum dolor sit amet</p>
	<button>Click</button>
</article>
```

<article data-card>
    <header>Another card</header>
    <p>Lorem Ipsum dolor sit amet</p>
    <button>Click</button>
</article>

## With image and caption

```html
<article data-card>
	<figure data-card-background>
		<img src="https://picsum.photos/1920/600" alt="This is just a placeholder image with no meaningful content" />
		<figcaption>Caption</figcaption>
	</figure>
</article>
```

<article data-card>
    <figure data-card-background>
        <img src="https://picsum.photos/1920/600" alt="This is just a placeholder image with no meaningful content">
        <figcaption>Caption</figcaption>
    </figure>
</article>

## With header image and link

```html
<article data-card>
	<a data-card-link href="#" aria-label="A generic card"></a>
	<img
		alt="This is just a placeholder image with no meaningful content"
		data-card-background
		src="https://picsum.photos/1920/1080"
	/>
</article>
```

<article data-card>
    <a data-card-link href="#" aria-label="A generic card"></a>
    <header>A generic card</header>
    <img alt="This is just a placeholder image with no meaningful content" data-card-background src="https://picsum.photos/1920/1080">
</article>

## Combined with shadow

```html
<article data-card data-shadow="2">
	<header>Another card</header>
	<p>Lorem Ipsum dolor sit amet</p>
	<button>Click</button>
</article>
```

<article data-card data-shadow="2">
    <header>Another card</header>
    <p>Lorem Ipsum dolor sit amet</p>
    <button>Click</button>
</article>
