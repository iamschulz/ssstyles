---
layout: index.njk
title: Callout
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/callout.css" data-button>{% svg "github-mark.svg" %} Source</a>

The callout is an info box for important information. It can have a header and some content.

```html
<aside data-callout>
	<header><h3>Watch out!</h3></header>
	<p>If you tellsomeone to watch out, you tell them to be careful or warn them of a danger.</p>
</aside>
```

<aside data-callout>
    <header><h3>Watch out!</h3></header>
    <p>If you tellsomeone to watch out, you tell them to be careful or warn them of a danger.</p>
</aside>

You can increase the importance by adding the accent colors to the data attribute.

```html
<aside data-callout="accent">
	<header><h3>Watch out!</h3></header>
	<p>
		Watch Out! is the second studio album from Canadian post-hardcore band Alexisonfire, released on June 8, 2004.
	</p>
</aside>
```

<aside data-callout="accent">
    <header><h3>Watch out!</h3></header>
	<p>Watch Out! is the second studio album from Canadian post-hardcore band Alexisonfire, released on June 8, 2004.</p>
</aside>

<br>

```html
<aside data-callout="accent2">
	<header><h3>Watch out!</h3></header>
	<p>
		You may also use the term to inform others that your watch is broken and you're no longer able to tell the time.
	</p>
</aside>
```

<aside data-callout="accent2">
    <header><h3>Watch out!</h3></header>
    <p>You may also use the term to inform others that your watch is broken and you're no longer able to tell the time.</p>
</aside>
