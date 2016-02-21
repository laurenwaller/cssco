# CSSCO

Photographic filters made with css, inspired by VSCO [http://www.cssco.co](http://www.cssco.co)

**[Download CSSCO](https://github.com/we-are-next/cssco/blob/gh-pages/dist/cssco.css)**

![CSSCO](http://playingwithcode.co.za/cssco/assets/images/cssco-screenshot.png)

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

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com)

### Requirements

Ensure that the following is installed on your computer:

1. [Git](http://git-scm.com/downloads)
2. [Node.js](https://nodejs.org/en/download)
3. [RubyInstaller for Windows](http://rubyinstaller.org/downloads)
  - Ruby is pre-installed on Mac
4. [Sass](http://sass-lang.com/install)

### Getting Started

1. Clone the repository: `git clone git@github.com:we-are-next/cssco.git`
2. Change to the directory you cloned the repository into: e.g. `cd cssco`
3. Install the required dependencies: `npm install`
4. Start a local server: `npm start`

### Components

- [Normalize.css](http://necolas.github.io/normalize.css)
- [jQuery](http://jquery.com)
- [Font Awesome](http://fontawesome.io)

### Linting

1. CSS: `grunt csslint`
