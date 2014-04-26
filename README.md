pararaehon.js
=========
Displays an illustrated book-like web page using HTML5 canvas.

Demo
-------------
<a href="http://pararaehon.com" target="_blank"><img src="http://pararaehon.com/github/maho01.png" alt="Screenshot" /></a>

[komomo](http://cat-speak.net/) illustration

Screenshot
-------------
<img src="http://pararaehon.com/github/maho02.png" alt="Screenshot" />

<img src="http://pararaehon.com/github/maho03.png" alt="Screenshot" />

Usage
-------------
- See [demo/maho/index.html](https://github.com/h1romas4/pararaehon.js/blob/master/demo/maho/index.html)

```html:index.html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width; initial-scale=1.0; user-scalable=0;">
<link rel="stylesheet" type="text/css" href="css/maho.css">
<script type="text/javascript" src="../../pararaehon.js"></script>
<script type="text/javascript" src="js/maho.js"></script>
</head>
<body id="parara">
<canvas></canvas>
<canvas></canvas>
<!-- and more... -->
</body>
</html>
```

- See [demo/maho/css/maho.css](https://github.com/h1romas4/pararaehon.js/blob/master/demo/maho/css/maho.css)

```css:maho.css
body {
    margin: 0;
    padding: 0;
}

canvas {
    display: block;
}
```

- See [demo/maho/js/maho.js](https://github.com/h1romas4/pararaehon.js/blob/master/demo/maho/js/maho.js)

```js:maho.js
new PararaEhon.Scene({
    id : 'parara',
    width: 960,
    height: 600,
    book : [
        /**
         * Page 01
         */
        {
             bg: {
                 image: 'images/page01/01_bg.png',
                 fixed: true
             },
             wizard: {
                 image: 'images/page01/01_m.png',
                 x: 50,
                 y: 25
             },
             title: {
                 image: 'images/page01/01_title.png',
                 x: 244,
                 y: 137
             }
        },
        /**
         * Page 02
         */
        {
             bg: {
                 image: 'images/page02/02_bg.png',
                 fixed: true
             },
             cloud: {
                 image: 'images/page02/02_cloud.png',
                 x: 142,
                 y: 20
             },
             hitsuji01: {
                 image: 'images/page02/02_hitsuji01.png',
                 x: 15,
                 //y: 320,
                 start: 200,
                 update: function() {
                     this.y = 600 + (1 - Math.exp(-6 * (this.tick / 60))) * -280;
                     if(this.tick > 60) this.complete = true;
                 }
             },
             hitsuji02: {
                 image: 'images/page02/02_hitsuji02.png',
                 x: 247,
                 // y: 342,
                 start: 200,
                 update: function() {
                     this.y = 622 + (1 - Math.exp(-6 * (this.tick / 60))) * -360;
                     if(this.tick > 14) this.complete = true;
                 }
             },
             heart: {
                 image: 'images/common/heart.png',
                 // x: 222,
                 // y: 280,
                 start: 200,
                 update: function() {
                     if(this.tick < 32) {
                         this.y = 600;
                     } else if(this.tick >= 32) {
                         var ti = (this.tick - 32) / 60;
                         this.y = 300 + (1 - Math.exp(-6 * ti)) * -50;
                         this.x = 222;
                     }
                     if(this.tick > 92) this.complete = true;
                 }
             },
             wizard: {
                 image: 'images/common/wizard.png',
                 x: 661,
                 y: 39,
                 update: function() {
                 }
             },
             text01: {
                 image: 'images/page02/02_txt01.png',
                 x: 164,
                 y: 108,
                 start: 200,
                 update: function() {
                     this.effectFeedIn(60, 30);
                 }
             },
             text02: {
                 image: 'images/page02/02_txt02.png',
                 x: 535,
                 y: 420,
                 start: 200,
                 update: function() {
                     this.effectFeedIn(60, 30);
                 }
             }
        },
		// and more...
```

- And Press "d" key

<img src="http://pararaehon.com/github/maho04.png" alt="Screenshot" />

Enjoy.

Browser
-------------
```js:maho.js
/**
 * PararaEhon.Scene.
 *
 * for Modern Browser(include IE9) and
 *  iOS6(better Apple A4 higher), Android4(better Google Chrome).
 * 
 * My Device List:
 *  Windows   IE11             work
 *  Windows   IE10             work
 *  Windows   IE9              work
 *  Windows   IE8              not work
 *  Windows   Firefox          work
 *  Mac       Firefox          work
 *  Mac       Google Chrome    work
 *  Mac       Safari           work
 *  Linux     Firefox          work
 *  Linux     Chromium         work
 *  iOS7      iPhone5s         work
 *  iOS6      iPhone4s         work
 *  iOS6      iPod touch(4th)  slow
 *  iOS6      iPad2            slow
 *  iOS5      iPhone4S         not work
 *  Android4  default browser  work        GALAXY S4
 *  Android4  Firefox          slow        GALAXY S4
 *  Android4  Google Chrome    work        NVIDIA Tegra3
 *  Android4  default browser  slow        NVIDIA Tegra3
 *  Android4  Firfox           slow        NVIDIA Tegra3
 *  FireOS 3  Amazon Silk      work        Kindle Fire HDX 8.9
 *  FireOS 3  Firefox          slow        Kindle Fire HDX 8.9
 *  Android2  default browser  not work    GALAXY SII
 *  Android2  Firefox          slow        GALAXY SII
 */
```

License
-------
pararaehon.js Licensed under the Apache License, Version 2.0
