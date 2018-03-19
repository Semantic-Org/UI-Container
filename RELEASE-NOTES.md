### Version 2.3.1 - Mar 19, 2018

> A general solution will most likely require branching code for IE11 which will disable flex (as IE11 doesnt correctly implement the latest spec for [absolute positioned flex containers](https://developers.google.com/web/updates/2016/06/absolute-positioned-children)).

### Version 2.2.11 - July 11, 2017

- **Sticky** - Fixed an issue where `ui sticky` used with a percentage based width would not resize properly if the content size of container changed when "stuck" [#4360](https://github.com/Semantic-Org/Semantic-UI/issues/4360)

### Version 2.2.5 - October, 27, 2016

-  **Sticky** - Adds `container` setting. This can be used to specify the offsetParent of the sticky element and avoid having to calculate on initialization (improving performance)

### Version 2.1.5 - Nov 1, 2015

- **Sticky** - Fixes bug where sticky would stick at incorrect times when using a different scroll container than `body` and scrollTop is not 0 on page load.

### Version 2.1.4 - Sep 13, 2015

- **Menu** - Fixed issue where `right menu` was not floating correctly inside a `menu > container` on mobile [#2969](https://github.com/Semantic-Org/Semantic-UI/issues/2969)

#### Bugs

- **Container** - Fix issue with `fluid container` being `100% + gutter` at mobile resolution (causing overflow)
- **Grid / Container** - `ui relaxed grid container` and `ui very relaxed grid container` will now all render at same container width

### Version 2.0.4 - July 17, 2015

- **Sticky** - Fixed `sticky` content jumping from `fixed` to `bound bottom` when scroll position has surpassed bottom of container during page refresh.
- **Sticky** - Sticky no longer uses `bottomPadding` to determine bottom edge of container.

### Version 2.0.0 - June 30, 2015

- **Grid** - `page grid` has been deprecated.  `page grids` used percentage gutters which made it unnecessarily difficult to style responsive page content. Moving forward we recommend using `ui container` a fixed width responsive container for holding page contents.
- **Container** - Containers are fixed width containers meant for holding page contents, and are a simpler alternative to `ui page grid`, view more [examples in docs](http://www.semantic-ui.com/elements/container.html#examples)
- **Search** - Search will now generate `results` container if one is not present on init
- **Dropdown** - Fixed dropdown menu items should not center inside of a center aligned container.
- **Rail** - Rail 100% height now uses `border-box` to ensure exact height match to container
- **Sticky** - Fix issues when `pushing: true` with sticky content having incorrect bottom spacing, when container has bottom padding

### Version 1.11.3-4 - March 6, 2015

- **Grid** - Fixed `right/left/center aligned` to adjust `align-items` in flex containers like `equal height/width`

### Version 1.11.0 - March 3, 2015

- **Table** - Fixes table on `mobile` sizes can surpass parent container width
- **Sticky** - Fix bottom attached position not adjusting for bottom padding on container element

### Version 1.10.3 - February 27, 2015

- **Button** - Fixes `<button>` inside `vertical buttons` not taking full container width

### Version 1.8.0 - January 23, 2015

- **Sticky** - Fixes issue with container size not being set explicitly on rail due to improper method renaming

### Version 1.0.0 - November 24, 2014

- **Grid** - Fixed page grid allows for fixed pixel size containers used with a grid instead of percentage

### Version 0.1.0 - Sep 25, 2013