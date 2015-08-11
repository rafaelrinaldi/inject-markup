# inject-html [![Build Status](https://travis-ci.org/rafaelrinaldi/inject-html.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/inject-html)

> Inject HTML into a web page.

## Install

Via [npm](http://npmjs.com):

```sh
$ npm install inject-html --save
```

Via [Bower](http://bower.io):

```sh
$ bower install inject-html --save
```

## Usage

```javascript
let fixture = `
<ul class='c-list'>
  <li>Lorem</li>
  <li>Ipsum</li>
</ul>
`;

injectHTML(fixture);

console.log(document.body.innerHTML);

// <ul class='c-list'>
//   <li>Lorem</li>
//   <li>Ipsum</li>
// </ul>
```

### API

### `injectHTML(chunk, [options])`

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
