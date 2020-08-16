[![GitHub issues](https://img.shields.io/github/issues/scriptex/calendar-widget.svg)](https://github.com/scriptex/calendar-widget/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/calendar-widget.svg)](https://github.com/scriptex/calendar-widget/commits/master)
[![Build Status](https://travis-ci.com/scriptex/calendar-widget.svg?branch=master)](https://travis-ci.com/scriptex/calendar-widget)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/calendar-widget/README.md)](https://github.com/scriptex/calendar-widget/)

# Calendar Widget

A super simple calendar widget written in TypeScript and SCSS implemented with a11y (accessibility) and i18n (internationalization) in mind.

## Demo

If you wish to go directly to the demo, please click [here](https://codepen.io/scriptex/pen/mgLExx) or [here](https://github.com/scriptex/calendar-widget/blob/master/demo/index.html).

## Options

The widget accepts four options which are optional:

1. Start year - number - defaults to current year.
2. Start month - number - defaults to current month (**It is zero based**).
3. ID of the container which will hold the calendar - String - defaults to `body`.
4. An object with strings used for internationalization - Object - defaults to:
    ```json
    {
		"days": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		"months": ["January", "February", "March", "April", "May", "June", "July", "August", "Septemer", "October", "November", "December"],
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

If you're using a module bundler such as Webpack, Rollup, Browserify:

```js
import { renderCalendarWidget } from 'simple-calendar-widget';

// Default settings
renderCalendarWidget();

// Or custom settings
renderCalendarWidget(2018, 0, '#calendar',     {
	"days": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	"months": ["January", "February", "March", "April", "May", "June", "July", "August", "Septemer", "October", "November", "December"],
	"prevMonth": "&larr;",
	"nextMonth": "&rarr;",
	"prevMonthTitle": "Previous month",
	"nextMonthTitle": "Next month"
});
```

If you're NOT using a module bundler such as Webpack, Rollup, Browserify:

First include the script in your markup:

```html
<script src="PATH_TO_CALENDAR_WIDGET_SOURCE/dist/index.js"></script>
```

Then use the package:

```js
// Default settings
renderCalendarWidget();

// Or custom settings
renderCalendarWidget(2018, 0, '#calendar',     {
	"days": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	"months": ["January", "February", "March", "April", "May", "June", "July", "August", "Septemer", "October", "November", "December"],
	"prevMonth": "&larr;",
	"nextMonth": "&rarr;",
	"prevMonthTitle": "Previous month",
	"nextMonthTitle": "Next month"
});
```

## Typings

The widget exports several types which are automatically found by TypeScript. The typings are located in the [`dist` folder](https://github.com/scriptex/calendar-widget/blob/master/dist/index.d.ts).

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

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fcalendar-widget&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
