zombufo.e('Square', function(attr) {
  var position = {x: attr.x, y: attr.y};
  var width = attr.size;
  var height = attr.size;
  var color = attr.color;

  return Crafty.e('2D, DOM, Color')
    .attr({x: position.x, y: position.y, w: width, h: height})
    .color(color);
});