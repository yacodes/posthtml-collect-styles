# Posthtml-collect-styles <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM version](http://img.shields.io/npm/v/posthtml-collect-styles.svg)](https://www.npmjs.org/package/posthtml-collect-styles)
[![Travis Build Status](https://travis-ci.org/canvaskisa/posthtml-collect-styles.svg)](https://travis-ci.org/canvaskisa/posthtml-collect-styles)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

## Installation
```console
$ npm i --save posthtml-collect-styles
```

## Usage
```html
<!-- index.html -->
<html>
<head>
</head>
<body>
  <style>.red {color: red;}</style>
  <style>.white {color: white;}</style>
</body>
</html>
```

```js
/* index.js */
var fs = require('fs');
var posthtml = require('posthtml');

posthtml()
  .use(require('posthtml-collect-styles')('style'))
  .process(fs.readFileSync('index.html', 'utf8'))
  .then(function(result) {
    return result; 

    /**
     * <html>
     *  <head>
     *    <style>
     *      .red {color: red;}
     *      .white {color: white;}
     *    </style>
     *  </head>
     *  <body></body>
     * </html>
     */
  });
```
## Api
`selector: string`: Selector to append styles, passed to [posthtml-match-helper](https://github.com/rasmusfl0e/posthtml-match-helper). `default: 'head'`.

## License
MIT © [Aleksandr Yakunichev](https://github.com/canvaskisa)
