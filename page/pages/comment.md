---
layout: index.njk
title: Comment
nav:
    [
        { url: "/#components", text: "Back" },
        { url: "/#nested-comments", text: "Nested comments" },
        { url: "/#avatars-and-cards", text: "Avatars and Cards" },
    ]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/comment.css" data-button>{% svg "github-mark.svg" %} Source</a>

This component will let you display comments, but please keep it civil.

```html
<article data-comment>
	<header>Chester Bennington</header>
	<p>It starts with one</p>
</article>
```

<article data-comment>
	<header>Chester Bennington</header>
	<p>It starts with one</p>
</article>

## Nested comments

Nested comments will show up as visually tiered.

```html
<article data-comment>
	<header>Chester Bennington</header>
	<p>It starts with one</p>
	<article data-comment>
		<header>Mike Shinoda</header>
		<p>One thing: I don't know why. It doesn't really matter how hard you try. Keep that in mind I designed this rhyme to explain in due time.</p>
		<article data-comment>
			<header>Chester Bennington</header>
			<p>All I know</p>
		</article>
	</article>
</article>
```

<article data-comment>
	<header>Chester Bennington</header>
	<article data-comment>
    	<header>Mike Shinoda</header>
    	<p>One thing: I don't know why. It doesn't really matter how hard you try. Keep that in mind I designed this rhyme to explain in due time.</p>
    	<article data-comment>
    		<header>Chester Bennington</header>
    		<p>All I know</p>
    	</article>
    </article>
</article>

You can also manually set the level:

```html
<article data-comment style="--level: 3">
	<header>Mike Shinoda</header>
	<p>What it meant to me will eventually be a memory of a time...</p>
</article>
```

<article data-comment style="--level: 3">
	<header>Mike Shinoda</header>
	<p>What it meant to me will eventually be a memory of a time...</p>
</article>

## Avatars and cards

You can integrate them with [avatars](/avatar) and [cards](/card).

```html
<article data-card data-comment data-shadow="1">
	<header>
		<a href="/foo"
			><img data-avatar data-shadow="1-hover" src="https://randomuser.me/api/portraits/lego/1.jpg" alt=""
		/></a>
		<a href="/foo">Lorem Ipsum</a>
	</header>
	<p>
		Quia voluptates architecto qui. Id maiores eum quis neque. Eligendi ut officiis eos laudantium dolorem eius et.
		Veniam sit illum ut sed maxime error eius. Est ducimus laudantium accusantium rerum. Qui sit sed porro ipsa
		culpa quibusdam laudantium.
	</p>
	<footer>
		<div data-group>
			<a href="/foo" data-button="accent">Read more</a>
			<a href="/foo" data-button="accent">Reply</a>
		</div>
	</footer>
</article>
```

<article data-card data-comment data-shadow="1">
    <header>
        <a href="/foo"><img data-avatar data-shadow="1-hover" src="https://randomuser.me/api/portraits/lego/1.jpg" alt="A portrait photo of a handsome little fella"></a>
        <a href="/foo">Lorem Ipsum</a>
    </header>
    <p>Quia voluptates architecto qui. Id maiores eum quis neque. Eligendi ut officiis eos laudantium dolorem eius et. Veniam sit illum ut sed maxime error eius. Est ducimus laudantium accusantium rerum. Qui sit sed porro ipsa culpa quibusdam laudantium.</p>
    <footer>
        <div data-group>
            <a href="/foo" data-button="accent">Read more</a>
            <a href="/foo" data-button="accent">Reply</a>
        </div>
    </footer>
</article>
