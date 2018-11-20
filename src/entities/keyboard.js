const key_input_map = {
  "87": { "type": "move", "input": "up" },       // "w"
  "65": { "type": "move", "input": "left" },     // "a"
  "83": { "type": "move", "input": "down" },     // "s"
  "68": { "type": "move", "input": "right" }     // "d"
};

var handle_key_down = function(keyboard_event) {
  var key = keyboard_event.key;
  if(key_input_map.hasOwnProperty(key)) {
    Crafty.trigger('Input Started', key_input_map[key]);
  }
};

var handle_key_up = function(keyboard_event) {
  var key = keyboard_event.key;
  if(key_input_map.hasOwnProperty(key)) {
    Crafty.trigger('Input Ended', key_input_map[key]);
  }
};

zombufo.e('Keyboard', function() {
  return Crafty.e('Input, KeyboardInput')
    .bind('KeyDown', handle_key_down)
    .bind('KeyUp', handle_key_up);
});