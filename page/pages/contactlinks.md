---
layout: index.njk
title: Contact Links
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

Links that start with `mailto:` and `tel:` have an icon that shows what it'll do. This component doesn't need a data attribute, it's always active whenever the component is imported.

```html
<address>
	<a href="mailto:foo@bar.com">foo@bar.com</a><br />
	<a href="tel:123456789">123 456 789</a>
</address>
```

<address>
<a href="mailto:foo@bar.com">foo@bar.com</a><br>
<a href="tel:123456789">123 456 789</a>
</address>
