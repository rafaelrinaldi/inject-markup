# inject-markup [![Build Status](https://travis-ci.org/rafaelrinaldi/inject-markup.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/inject-markup)

> Inject HTML into a web page.

## Install

Via [npm](http://npmjs.com):

```sh
$ npm install inject-markup --save
```

Via [Bower](http://bower.io):

```sh
$ bower install inject-markup --save
```

## Usage

```javascript
let fixture = `
<ul class='c-list'>
  <li>Lorem</li>
  <li>Ipsum</li>
</ul>
`;

injectMarkup(fixture);

console.log(document.body.innerHTML);

// <ul class='c-list'>
//   <li>Lorem</li>
//   <li>Ipsum</li>
// </ul>
```

### API

### `injectMarkup(chunk, [options])`

Returns the newly created element.

#### `chunk`

Type: `string`  

HTML chunk to be injected into the web page.

#### `options`

##### `root`

Type: `HTMLDocument`  
Default: `document`  

Object representing the web page root.

##### `container`

Type: `Node`  
Default: `document.body`  

Container in which the fixture should be added to.

##### `fixture`

Type: `string`  
Default: `fixture-`  

Fixture prefix id.

## Motivation

I was tired of writing this kind of module over and over again to help me with browser unit tests. So I've decided to move it to a module that now I can reuse.

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
