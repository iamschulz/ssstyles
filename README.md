# Ssstyles

Ssstyles is a very simple CSS style system. It consists of a classless stylesheet as a base layer and some small, optional components on top.

It's supposed to be:

-   Lightweight
-   Configurable
-   Hackable
-   Accessible

You can use this as a quick start for simple websites and build your own stuff on top.

## Usage

You have multiple options to install Ssstyles. I provide two packages:

-   The base styles, which include a classless stylesheet for simple HTML sites
-   The complete base+components package, which you can use to build more advanced sites

### CDN

Use this snippet to insert the **base styles**:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/package@version/file">
```

Use this snippet to insert the base styles **and all components**:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/package@version/file">
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

You can also simply download the CSS file and include it however you wish.

## More info

Fore more information pleaee visit the [project site](https://iamschulz.github.io/ssstyles).
