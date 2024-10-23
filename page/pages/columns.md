---
layout: index.njk
title: Columns
nav: [{ url: "/#components", text: "Back" }]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/columns.css" data-button>{% svg "github-mark.svg" %} Source</a>

The columns component layouts text in multiple columns.

You need to import the CSS file and assign the data attribute to use it.

```css
@import "ssstyles/css/headline.css" layer(components);
```

```html
<div data-columns>He made many woofs [...]</div>
```

<div data-columns>
	He made many woofs shooberino heckin angery woofer bork, what a nice floof. Very hand that feed shibe corgo big ol doing me a frighten pupperino you are doing me a frighten, fluffer super chub borking doggo. You are doing me a frighten blop puggorino doggo dat tungg tho heck, puggorino porgo yapper. Blop thicc clouds many pats, floofs very good spot stop it fren, extremely cuuuuuute super chub. long bois wrinkler. Stop it fren wrinkler dat tungg tho very hand that feed shibe wow such tempt, h*ck long bois. Ur givin me a spook length boy puggo heckin angery woofer you are doing me the shock lotsa pats, floofs such treat heck. Shooberino long doggo very taste wow blep heckin angery woofer, floofs borkf boof. Heck boof porgo super chub, puggorino wrinkler. Extremely cuuuuuute blop lotsa pats doing me a frighten very jealous pupper, noodle horse doge you are doin me a concern, doggorino puggo big ol pupper. You are doing me the shock heck heckin good boys yapper, aqua doggo snoot.
</div>

## More columns

This component supports up to 4 columns, spcified by the value of the `data-columns` attribute. The default is `2`.

```html
<div data-columns="4">He made many woofs [...]</div>
```

<div data-columns="4">
	He made many woofs shooberino heckin angery woofer bork, what a nice floof. Very hand that feed shibe corgo big ol doing me a frighten pupperino you are doing me a frighten, fluffer super chub borking doggo. You are doing me a frighten blop puggorino doggo dat tungg tho heck, puggorino porgo yapper. Blop thicc clouds many pats, floofs very good spot stop it fren, extremely cuuuuuute super chub. long bois wrinkler. Stop it fren wrinkler dat tungg tho very hand that feed shibe wow such tempt, h*ck long bois. Ur givin me a spook length boy puggo heckin angery woofer you are doing me the shock lotsa pats, floofs such treat heck. Shooberino long doggo very taste wow blep heckin angery woofer, floofs borkf boof. Heck boof porgo super chub, puggorino wrinkler. Extremely cuuuuuute blop lotsa pats doing me a frighten very jealous pupper, noodle horse doge you are doin me a concern, doggorino puggo big ol pupper. You are doing me the shock heck heckin good boys yapper, aqua doggo snoot.

</div>
