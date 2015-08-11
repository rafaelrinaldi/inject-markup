'use strict';

var injectHTML = require('./');
var test = require('tape');
var fixture = '<button class="c-button">Click me!</button>';

test('inject html', function(t) {

  t.equal(document.querySelector('.c-button'), true, 'DOM should not contain fixture');
  t.end();

});
