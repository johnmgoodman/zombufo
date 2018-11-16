(function(config, game) {
  var initializer = function() {
    window.removeEventListener('load', initializer);
    game(config, window.document.getElementById(config.zelementId));
  };
  window.addEventListener('load', initializer);
})(require('../config'), require('./game'));