---
layout: index.njk
permalink: /index.html
nav:
    [
        { url: "#install", text: "Install" },
        { url: "#configuration", text: "Configuration" },
        { url: "#base-styles", text: "Base Styles" },
        { url: "#components", text: "Components" },
        { url: "#tips-and-tricks", text: "Tips and Tricks" },
    ]
---

*[classless]: That means it works on bare html tags

Ssstyles is a very simple CSS style system. It consists of a classless stylesheet as a base layer and some small, optional components on top.

It's supposed to be:

-   Lightweight
-   Configurable
-   Hackable
-   Accessible

You can use this as a quick start for simple websites and build your own stuff on top.

---

## Install

You have multiple options to install Ssstyles. I provide two packages:

-   The base styles, which include a classless stylesheet for simple HTML sites
-   The complete base+components package, which you can use to build more advanced sites

### CDN

Use this snippet to insert the **base styles**:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/package@version/file" />
```

Use this snippet to insert the base styles **and all components**:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/package@version/file" />
```

### npm

```bash
npm install ssstyles
```

```css
@layer base, layout, components;
@import "ssstyles/base.css" layer(base);
@import "ssstyles/transition.css" layer(base);
@import "ssstyles/basegrid.css" layer(layout);
@import "ssstyles/headline.css" layer(components);
/* ... */
```

### Manual installation

You can also simply download the CSS file and include it however you wish:

<button>Base Styles (2.2kB)</button>

<button>Base and Components (4.3kB)</button>

All file sizes are gzipped.

---

## Configuration

Update the following custom properties to personalize the stylesheet:

```css
--col-bg: <color>;
--col-bg2: <color>;
--col-bg3: <color>;
--col-fg: <color>;
--col-fg2: <color>;
--col-accent: <color>;
--col-accent2: <color>;
--col-accent-contrast: <color>;
--font-size-min: <length>;
--font-size-max: <length>;
--line-height: <number>;
--letter-spacing: <length>;
--body-width: <length>;
--border-radius: <length>;
```

[Read further configuration details](/configuration)

---

## Base Styles

You can opt to use only the base package. This one uses only html tags as selectors and is meant to work with any website that hase some clean HTML right out of the box. It applies some styles to native elements, adds a basic layout and color theming. It's neither the lightest, nor the most feature complete, but it's also not too far off.

The base package also serves as the foundation to all other components.

Here are some included elements:

<article data-card data-shadow="2-hover">
    <a data-card-link href="/base-styles" aria-label="Base Styles"></a>
    <figure data-card-background>
        {% svg "base.svg" %}
        <figcaption>Base Styles</figcaption>
    </figure>
</article>

---

## Components

Here are some optional components. They're invoked by adding `data-componentname` to the corresponding element.

<ul data-autogrid="1/3" data-hint="nolist">
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/layout" aria-label="Layout"></a>
        <figure data-card-background>
            {% svg "layout.svg" %}
            <figcaption>Layout</figcaption>
        </figure>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/nav" aria-label="Nav"></a>
        <figure data-card-background>
            {% svg "nav.svg" %}
            <figcaption>Nav</figcaption>
        </figure>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/skip-link" aria-label="Skiplink"></a>
        <figure data-card-background>
            {% svg "skiplink.svg" %}
            <figcaption>Skiplink</figcaption>
        </figure>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/headline" aria-label="Headline"></a>
        <figure data-card-background>
            {% svg "headline.svg" %}
            <figcaption>Headline</figcaption>
        </figure>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/card" aria-label="Card"></a>
        <figure data-card-background>
            {% svg "card.svg" %}
            <figcaption>Card</figcaption>
        </figure>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/breakout" aria-label="Breakout"></a>
        <figure data-card-background>
            {% svg "breakout.svg" %}
            <figcaption>Breakout</figcaption>
        </figure>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/group" aria-label="Group"></a>
        <figure data-card-background>
            {% svg "breakout.svg" %}
            <figcaption>Group</figcaption>
        </figure>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/callout" aria-label="Callout"></a>
        <figure data-card-background>
            {% svg "callout.svg" %}
            <figcaption>Callout</figcaption>
        </figure>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/shadow" aria-label="Shadow"></a>
        <figure data-card-background>
            {% svg "shadow.svg" %}
            <figcaption>Shadow</figcaption>
        </figure>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/toggle" aria-label="Toggle"></a>
        <figure data-card-background>
            {% svg "toggle.svg" %}
            <figcaption>Toggle</figcaption>
        </figure>
    </li>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/loading" aria-label="Loading"></a>
        <figure data-card-background>
            {% svg "toggle.svg" %}
            <figcaption>Loading</figcaption>
        </figure>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/carousel" aria-label="Carousel"></a>
        <figure data-card-background>
            {% svg "carousel.svg" %}
            <figcaption>Carousel</figcaption>
        </figure>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/action-link" aria-label="Action Link"></a>
        <figure data-card-background>
            {% svg "actionlink.svg" %}
            <figcaption>Action Link</figcaption>
        </figure>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/contact-links" aria-label="Contact Links"></a>
        <figure data-card-background>
            {% svg "contactlinks.svg" %}
            <figcaption>Contact Links</figcaption>
        </figure>
    </li>
    <li data-card data-shadow="2-hover">
        <a data-card-link href="/animations" aria-label="Animations"></a>
        <figure data-card-background>
            {% svg "animations.svg" %}
            <figcaption>Animations</figcaption>
        </figure>
    </li>
</ul>

---

## Tips and Tricks

### Modify a component

Every component's CSS is linked on its page. Since all styles are packed into a layer, their specificity as squashed to 1. That means you can use the selector of the component and write your own styles on top.

Don't like that the sparkle animation uses the ✨-emoji?

```css
[data-sparkle]::before,
[data-sparkle]::after {
	content: "👁️";
}
```

<style>
    .sparkle-demo [data-sparkle]::before,
    .sparkle-demo [data-sparkle]::after {
            content: "👁️";
    }
</style>

<p class="sparkle-demo">Why would you do that? <span data-sparkle>I have no idea.</span> But now you can.</p>

I would advise that you put your own modifications into a layer as well, to keep the specificity down. That'll help you keep your code organised.

### Transitions

Some components need a different transition than others - for example, combining the Card component (`transition: translate`) with a Shadow (`transition: box-shadow`). CSS would normally overwrite one transition with the other. I've added transitions to a global selector and put the `transition-time` in a variable that defaults to `0s`.

Here is a list of all available transition variables:

```css
--t-transform
--t-translate
--t-rotate
--t-scale
--t-box-shadow
--t-color
--t-background
--t-border-color
--t-opacity
--t-filter
```

That way I can enable and combine selected transitions by setting a time:

```css
.shrink {
	--t-scale: 0.5s;

	&:hover {
		scale: 0.8;
	}
}

.fade {
	--t-opacity: 0.5s;

	&:hover {
		opacity: 0.2;
	}
}
```

<style>
.demo {
    padding: 5rem;
    text-align: center;
}

.shrink {
    --t-scale: 0.5s;

    &:hover {
        scale: 0.8;
    }
}

.fade {
    --t-opacity: 0.5s;

    &:hover {
        opacity: 0.2;
    }
}
</style>

<div data-card class="demo shrink fade">
    <code>.shrink.fade</code>
</div>

In order to get transitions working you need to import the package:

```css
@import "./transition.css" layer(base);
```

It's already included in the full package. It's not included in the base styles, since there are not combined transitions in there.

### Custom fonts

You can include your own webfonts and set them via custom properties:

```css
--font: "Inter";
--font-mono: "Fira Code";
--font-accent: "Lobster";
```

Make sure you set a [working fallback option](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) and [adjust for font size diffenreces](https://screenspan.net/fallback) to minimize [CLS](https://web.dev/articles/cls?hl=de).

### Include Tailwind

Tailwind works great as style tokens on top of Ssstyles. You can even include Ssstyles' custom properties as Tailwind classes. Insert this into your `tailwind.config.js`:

```js
module.exports = {
	theme: {
		extend: {
			colors: {
				fg: "var(--col-fg)",
				fg2: "var(--col-fg2)",
				bg1: "var(--col-bg1)",
				bg2: "var(--col-bg2)",
				bg3: "var(--col-bg3)",
				accent: "var(--col-accent)",
				accent2: "var(--col-accent2)",
				"accent-contrast": "var(--col-accent-contrast)",
			},
			fontFamily: {
				base: "var(--font)",
				mono: "var(--font-mono)",
				accent: "var(--font-accent)",
			},
		},
	},
	variants: {},
	plugins: [],
};
```

You can use it like this:

```html
<article data-card class="bg-accent text-accent-contrast">I'm a modified card!</article>
```
