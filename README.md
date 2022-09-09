[![Travis CI](https://travis-ci.com/scriptex/calendar-widget.svg?branch=master)](https://travis-ci.com/scriptex/calendar-widget)
[![Github Build](https://github.com/scriptex/calendar-widget/workflows/Build/badge.svg)](https://github.com/scriptex/calendar-widget/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/calendar-widget/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/calendar-widget&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-calendar-widget-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/calendar-widget/badge)](https://www.codefactor.io/repository/github/scriptex/calendar-widget)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/calendar-widget/README.md?pixel)](https://github.com/scriptex/calendar-widget/)

# Calendar Widget

> A super simple calendar widget written in TypeScript and SCSS implemented with a11y (accessibility) and i18n (internationalization) in mind.

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/calendar-widget?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/calendar-widget?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/calendar-widget?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/calendar-widget)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/calendar-widget?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/calendar-widget?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/calendar-widget?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/calendar-widget?style=plastic)

## Demo

If you wish to go directly to the demo, please click [here](https://codepen.io/scriptex/pen/mgLExx) or [here](https://calendar-widget.atanas.info/).

## Options

The widget accepts an object with options which are optional:

1. Start year - number - defaults to current year.
2. Start month - number - defaults to current month (**It is zero based**).
3. ID of the container which will hold the calendar - String - defaults to `body`.
4. An object with strings used for internationalization - Object - defaults to:
    ```json
    {
    	"days": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    	"months": [
    		"January",
    		"February",
    		"March",
    		"April",
    		"May",
    		"June",
    		"July",
    		"August",
    		"Septemer",
    		"October",
    		"November",
    		"December"
    	],
    	"prevMonth": "&larr;",
    	"nextMonth": "&rarr;",
    	"prevMonthTitle": "Previous month",
    	"nextMonthTitle": "Next month"
    }
    ```

## Install

```sh
# Via NPM
npm i simple-calendar-widget

# Via Yarn
yarn add simple-calendar-widget
```

## Usage

```js
import { renderCalendarWidget } from 'simple-calendar-widget';

// Default settings
renderCalendarWidget();

// Or custom settings
renderCalendarWidget({
	startYear: 2018,
	startMonth: 0,
	container: '#calendar',
	translations: {
		days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		months: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'Septemer',
			'October',
			'November',
			'December'
		],
		prevMonth: '&larr;',
		nextMonth: '&rarr;',
		prevMonthTitle: 'Previous month',
		nextMonthTitle: 'Next month'
	}
});
```

## TypeScript support

The package is written in TypeScript and provides full TypeScript support. The widget exports several types which are automatically found by TypeScript.

## CSS

The widget comes with an optional stylesheet. You can see the default styling in the demo above.

In order to use the default style, you should have used the default settings:

```css
/* If you used the default settings */
@import 'calendar-widget/dist/index.css';
```

If you are using SCSS and wish to use the widget with custom settings, you can import the SCSS mixin and tweak it a bit:

```scss
@import 'calendar-widget/index.scss';

#my-calendar-container {
	$calendar-width: 400px;
	$calendar-color: rebeccapurple;
	@include calendar($calendar-width, $calendar-color);
}
```

You can also include the stylesheet in a `<link>` in your markup:

```html
<link rel="stylesheet" href="PATH_TO_CALENDAR_WIDGET_SOURCE/dist/index.css" />
```

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>

<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
