---
layout: index.njk
title: Contact Links
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/contactlinks.css" data-button>{% svg "github-mark.svg" %} Source</a>

Links that start with `mailto:` and `tel:` have an icon that shows what it'll do. This component doesn't need a data attribute, it's always active whenever the component is imported.

You need to import the CSS file. Contact links apply automatically to their elements.

```css
@import "ssstyles/contactlinks.css" layer(components);
```

```html
<a href="mailto:foo@bar.com">foo@bar.com</a>
```

<a href="mailto:foo@bar.com">foo@bar.com</a><br>

```html
<a href="tel:123456789">123 456 789</a>
```

<a href="tel:123456789">123&nbsp;456&nbsp;789</a>
