
var initialize_crafty = function(config, zelement) {
  Crafty.init(config.width, config.height, zelement);
};

var initialize_zombufo = function(config) {
  var z = window.zombufo = require('./zombufo');
};

var load_components = function() {
  import_all(require.context('./components/', true, /\.js$/));
};

var load_entities = function() {
  import_all(require.context('./entities/', true, /\.js$/));
};

var load_scenes = function() {
  import_all(require.context('./scenes/', true, /\.js$/));
};

var import_all = function(rctx) {
  rctx.keys().forEach(rctx);
}

module.exports = function(config, zelement) {
  if(typeof Crafty === 'undefined') throw('Crafty is undefined!');
  initialize_crafty(config, zelement);
  initialize_zombufo(config);
  load_components();
  load_entities();
  load_scenes();
  Crafty.enterScene('Level 1');
};