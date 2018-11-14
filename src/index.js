(function(config, zombufo) {
  var initializer = function() {
    window.removeEventListener('load', initializer);
    zombufo(config, window.document.getElementById(config.zelementId));
  };
  window.addEventListener('load', initializer);
})(require('../config'), require('./zombufo'));