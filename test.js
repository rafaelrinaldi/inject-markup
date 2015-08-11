'use strict';

var injectMarkup = require('./');
var test = require('tape');
var fixture = '<button class="c-button">Click me!</button>';

function hasElement(selector) {
  return document.querySelector(selector) !== null;
}

test('inject html', function(t) {

  var container;

  t.equal(hasElement('.c-button'), false, 'DOM should not contain fixture before calling `innerHTML()`');

  container = injectMarkup(fixture);

  t.equal(hasElement('.c-button'), true, 'DOM should contain fixture after calling `innerHTML()`');
  t.equal(container.innerHTML, fixture, 'Container markup should match fixture chunk');

  t.end();

});
