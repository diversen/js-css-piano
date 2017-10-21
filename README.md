# js-css-piano

Very small module for drawing a piano using js and css

## Install: 

    npm install --save js-css-piano

## Usage

~~~js
var p = require('js-css-piano');
var elemID = 'piano-container';

var p = new piano(elemID, {
        octaves: 2,
        octaveBegin: 3
});
p.createPiano();
~~~

Remember to include the [piano.css](piano.css)

You can also see [index.html](index.html) which includes the bundle built from [test.js](test.js)

You can see this example here: 

[https://diversen.github.io/js-css-piano/](https://diversen.github.io/js-css-piano/)

## Build and watch example

    ./watch

## Inspiration

[https://codepen.io/zastrow/details/oDBki](https://codepen.io/zastrow/details/oDBki)

## License

MIT © [Dennis Iversen](https://github.com/diversen)