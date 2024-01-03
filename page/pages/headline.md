---
layout: index.njk
title: Headline
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/headline.css" data-button>{% svg "github-mark.svg" %} Source</a>

The headline component will style the anchor link in front of a headline. The link needs to be the first direct child of the headline.

You need to import the CSS file and assign the data attribute to use it.

```css
@import "ssstyles/css/headline.css" layer(components);
```

```html
<h1><a href="#headline1" id="headline1">#</a> Headline 1</h1>
<h1><a href="#headline2" id="headline2">#</a> Headline 2</h1>
<h1><a href="#headline3" id="headline3">#</a> Headline 3</h1>
<h1><a href="#headline4" id="headline4">#</a> Headline 4</h1>
<h1><a href="#headline5" id="headline5">#</a> Headline 5</h1>
<h1><a href="#headline6" id="headline6">#</a> Headline 6</h1>
```

<h1><a href="#headline1" id="headline1">#</a> Headline 1</h1>
<h2><a href="#headline2" id="headline2">#</a> Headline 2</h2>
<h3><a href="#headline3" id="headline3">#</a> Headline 3</h3>
<h4><a href="#headline4" id="headline4">#</a> Headline 4</h4>
<h5><a href="#headline5" id="headline5">#</a> Headline 5</h5>
<h6><a href="#headline6" id="headline6">#</a> Headline 6</h6>
