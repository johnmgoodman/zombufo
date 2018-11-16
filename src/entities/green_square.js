zombufo.e('GreenSquare', function(attr) {
  var position = {x: attr.x, y: attr.y};
  var size = attr.size;
  var color = attr.color;

  return Crafty.e('Square, Color')
    .attr({x: position.x, y: position.y})
    .size(size)
    .color(color);
});