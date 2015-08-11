(function(exports) {
  'use strict';

  function injectMarkup(chunk, options) {
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
    define(function() { return injectMarkup; });
  } else if(typeof module !== 'undefined' && module.exports) {
    module.exports = injectMarkup;
  } else {
    exports.injectMarkup = injectMarkup;
  }

})(this);
