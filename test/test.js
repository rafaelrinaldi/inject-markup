'use strict';

var injectHTML = require('../');
var test = require('tape');
var hasElement = require('./util/hasElement');
var fixture = '<button class="c-button">Click me!</button>';

test('inject html', function(t) {

  var container;
  var now;

  t.equal(hasElement('.c-button'), false, 'DOM should not contain fixture before calling `innerHTML()`');

  now = +new Date();
  container = injectHTML(fixture);

  t.equal(hasElement('.c-button'), true, 'DOM should contain fixture after calling `innerHTML()`');
  t.equal(container.innerHTML, fixture, 'Container markup should match fixture chunk');
  t.equal(container.getAttribute('id'), 'fixture-' + now, 'Fixture id should be composed by prefix plus timestamp');

  t.end();

});
