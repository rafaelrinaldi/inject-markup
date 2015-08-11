'use strict';

var injectHTML = require('../');
var test = require('tape');
var hasElement = require('./util/hasElement');
var fixture = '<button class="c-button">Click me!</button>';


test('inject html', function(t) {

  t.equal(hasElement('.c-button'), false, 'DOM should not contain fixture');

  injectHTML(fixture);

  t.equal(hasElement('.c-button'), true, 'DOM should contain fixture');
  t.end();

});
