(function(exports) {
  'use strict';

  function injectHTML(chunk, options) {
    options = options || {};

    var root = options.root || document;
    var container = options.container || document.body;
    var fixture = root.createElement('div');
    var uid = +new Date();
    var prefix = options.prefix || 'fixture-';

    fixture.setAttribute('id', prefix + uid);
    fixture.innerHTML = chunk;

    return container.appendChild(fixture);
  }

  if(typeof define === 'function' && define.amd) {
    define(function() { return injectHTML; });
  } else if(typeof module !== 'undefined' && module.exports) {
    module.exports = injectHTML;
  } else {
    exports.injectHTML = injectHTML;
  }

})(this);
