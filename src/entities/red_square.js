var calc_from_active_keys = function(active, max_acc) {
  var horizontalctl = (active.indexOf('left') === -1 ? 0 : -1) + (active.indexOf('right') === -1 ? 0 : 1);
  var verticalctl = (active.indexOf('up') === -1 ? 0 : -1) + (active.indexOf('down') === -1 ? 0 : 1);
  
  if(horizontalctl === 0 || verticalctl === 0 ) {
    return [max_acc * horizontalctl, max_acc * verticalctl];
  } else {
    return [max_acc * (Math.PI/4) * horizontalctl, max_acc * (Math.PI/4) * verticalctl];
  }
};

zombufo.e('RedSquare', function() {
  var red_square = Crafty.e('Square, Color, RigidBody, InputControl')
    .color('#FF0000');
  
  red_square.uniqueBind('Input Control Move Updated', function(data) {
    var active = data.active;
    this.acceleration(calc_from_active_keys(active, 1.0));
  });
  
  return red_square;
});