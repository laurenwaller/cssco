# CSSCO

Photographic filters made with css, inspired by VSCO [http://www.cssco.co](http://www.cssco.co)

**[Download](https://github.com/we-are-next/cssco/cssco.css)**

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
