---
layout: index.njk
title: Avatar
nav:
    [
        { url: "/#components", text: "Back" },
        { url: "#image-avatar", text: "Image avatar" },
        { url: "#text-avatar", text: "Text avatar" },
        { url: "#linked-avatar", text: "Linked avatar" },
        { url: "#grouped-avatars", text: "Grouped avatars" },
    ]
permalink: "/{{ title | slugify }}/index.html"
---

<a href="https://github.com/iamschulz/ssstyles/blob/main/css/avatar.css" data-button>{% svg "github-mark.svg" %} Source</a>

This component will display an avatar or profile picture.

## Image avatar

You can display a profile picture like this:

```html
<img
	data-avatar
	src="https://randomuser.me/api/portraits/lego/1.jpg"
	alt="Guy-Manuel de Homem Christo's profile picture"
/>
```

<img data-avatar src="https://randomuser.me/api/portraits/lego/1.jpg" alt="Guy-Manuel de Homem Christo's profile picture">

## Linked avatar

Linking to a profile page gets you a hover style:

```html
<a href="#thomas-bangaltar"
	><img data-avatar src="https://randomuser.me/api/portraits/lego/1.jpg" alt="Thomas Bangaltar's profile picture"
/></a>
```

<a href="#thomas-bangaltar"><img data-avatar src="https://randomuser.me/api/portraits/lego/1.jpg" alt="Thomas Bangaltar's profile picture" /></a>

## Text avatar

No profile picture? Go with initial instead:

```html
<a href="#leonard-cohen"><span data-avatar aria-label="Leonard Cohen">LC</span></a>
```

<a href="#leonard-cohen"><span data-avatar aria-label="Leonard Cohen">LC</span></a>

## Grouped avatars

Putting avatars in a group will display them in a stacked list:

```html
<div data-group>
	<a href="#mike-shinoda"
		><img data-avatar src="https://randomuser.me/api/portraits/lego/1.jpg" alt="Mike Shinoda's profile picture"
	/></a>
	<a href="#brad-delson"
		><img data-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Brad Delson's profile picture"
	/></a>
	<a href="#dave-farrell"
		><img
			data-avatar
			src="https://randomuser.me/api/portraits/lego/3.jpg"
			alt="Dave Phoenix Farrell's profile picture"
	/></a>
	<a href="#joe-hahn"
		><img data-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Joe Hahn's profile picture"
	/></a>
	<a href="#rob-bourdon"
		><img data-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Rob Bourdon's profile picture"
	/></a>
	<a href="#chester-bennington"><span data-avatar aria-label="Chester Bannington">CB</span></a>
</div>
```

<div data-group>
    <a href="#mike-shinoda"><img data-avatar src="https://randomuser.me/api/portraits/lego/1.jpg" alt="Mike Shinoda's profile picture" /></a>
	<a href="#brad-delson"><img data-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Brad Delson's profile picture" /></a>
	<a href="#dave-farrell"><img data-avatar src="https://randomuser.me/api/portraits/lego/3.jpg" alt="Dave Phoenix Farrell's profile picture" /></a>
	<a href="#joe-hahn"><img data-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Joe Hahn's profile picture" /></a>
	<a href="#rob-bourdon"><img data-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Rob Bourdon's profile picture" /></a>
	<a href="#chester-bennington"><span data-avatar aria-label="Chester Bannington">CB</span></a>
</div>

```html
<div data-group="vertical">
	<a href="#lou-watts"
		><img data-avatar src="https://randomuser.me/api/portraits/lego/1.jpg" alt="Lou Watts's profile picture"
	/></a>
	<a href="#boff-whalley"
		><img data-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Boff Whalley's profile picture"
	/></a>
	<a href="#neil-ferguson"
		><img data-avatar src="https://randomuser.me/api/portraits/lego/3.jpg" alt="Neil Ferguson's profile picture"
	/></a>
	<a href="#jode-abbott"
		><img data-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Jude Abbott's profile picture"
	/></a>
	<a href="#phil-moody"
		><img data-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Phil Moody's profile picture"
	/></a>
</div>
```

<div data-group="vertical">
    <a href="#lou-watts"><img data-avatar src="https://randomuser.me/api/portraits/lego/1.jpg" alt="Lou Watts's profile picture" /></a>
	<a href="#boff-whalley"><img data-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Boff Whalley's profile picture" /></a>
	<a href="#neil-ferguson"><img data-avatar src="https://randomuser.me/api/portraits/lego/3.jpg" alt="Neil Ferguson's profile picture" /></a>
	<a href="#jode-abbott"><img data-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Jude Abbott's profile picture" /></a>
	<a href="#phil-moody"><img data-avatar src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Phil Moody's profile picture" /></a>
</div>
