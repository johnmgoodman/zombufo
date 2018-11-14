
var initialize_zombufo = function(config, zelement) {
  Crafty.init(config.width, config.height, zelement);
};


module.exports = function(config, zelement) {
  if(typeof Crafty === 'undefined') throw('Crafty is undefined!');
  initialize_zombufo(config, zombufo);
};