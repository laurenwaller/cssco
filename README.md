# CSSCO

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](http://gruntjs.com/)

Photographic filters made with css, inspired by VSCO and CSSgram [http://www.cssco.co](http://www.cssco.co)

**[Download](https://raw.githubusercontent.com/we-are-next/cssco/master/cssco.css)**

___

### How to use CSSCO
**Add the downloaded css file path to the head of your document:**

`<link href="path/to/cssco.css" rel="stylesheet" type="text/css">`


**Add the filter to your image element using the relevant CSSCO classes:**

``` html
<div class="cssco cssco--c1">
   <img src="image.png">
</div>
```

___

### Compatability

Unfortunately, IE & Edge browsers, as well as Opera Mini do not support filters and blend modes.

Safari (desktop & IOS ) does not support the hue, saturation, color, and luminosity blend modes, but this should not affect the CSSCO filters much, if at all.

See compatibility for: [mixblendmode](http://caniuse.com/#feat=css-mixblendmode) | [filters](http://caniuse.com/#feat=css-filters)

___

*These filters are inspired by VSCO and are not exact replicas of their filters, but are as close as I could get. If you think you can get closer, please feel free to contribute :)

___

### Contributing

#### Requirements

Ensure that the following is installed on your computer:

1. [Git](http://git-scm.com/downloads)
2. [Node.js](https://nodejs.org/en/download)

#### Getting started

1. Clone the repository: `git clone git@github.com:we-are-next/cssco.git`
2. Change to the directory you cloned the repository into: e.g. `cd cssco`

#### Lint/Minify

1. Install the required dependencies: `npm install`
2. Lint: `grunt lint`
3. Minify: `grunt min`
