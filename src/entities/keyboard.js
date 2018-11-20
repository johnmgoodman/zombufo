const key_input_map = {
  "w": { "type": "move", "input": "up" },
  "a": { "type": "move", "input": "left" },
  "s": { "type": "move", "input": "down" },
  "d": { "type": "move", "input": "right" }
};

var handle_key_down = function(keyboard_event) {
  console.log('keyboard received "KeyDown"', keyboard_event);
  var key = keyboard_event.originalEvent.key;
  if(key_input_map.hasOwnProperty(key)) {
    Crafty.trigger('Input Started', key_input_map[key]);
  }
};

var handle_key_up = function(keyboard_event) {
  console.log('keyboard received "KeyUp"', keyboard_event);
  var key = keyboard_event.originalEvent.key;
  if(key_input_map.hasOwnProperty(key)) {
    Crafty.trigger('Input Ended', key_input_map[key]);
  }
};

zombufo.e('Keyboard', function() {
  return Crafty.e('Input, KeyboardInput')
    .bind('KeyDown', handle_key_down)
    .bind('KeyUp', handle_key_up);
});