
var initialize_zombufo = function(config, zelement) {
  Crafty.init(config.width, config.height, zelement);
};

var load_components = function() {
  import_all(require.context('./components/', true, /\.js$/));
};

var load_scenes = function() {
  import_all(require.context('./scenes/', true, /\.js$/));
};

function import_all (r) {
  r.keys().forEach(r);
}

module.exports = function(config, zelement) {
  if(typeof Crafty === 'undefined') throw('Crafty is undefined!');
  initialize_zombufo(config, zombufo);
  load_components();
  load_scenes();
  Crafty.enterScene('Level 1');
};