const type_event_name_map = {
  "move": "Input Control Move Updated"
};

const input_types = {
  "up": "move",
  "left": "move",
  "down": "move",
  "right": "move"
};

Crafty.c('InputControl', {

  init: function() {
    this._input_control = {
      move: []
    };
  },

  events: {
    'Input Started': function(data) {
      console.log('input control received "Input Started"', data);
      var input = data.input;
      if(input_types.hasOwnProperty(input)) {
        let input_type = input_types[input];
        let active = this._input_control[input_type];
        let active_index = active.indexOf(input);
        if( active_index === -1) {
          active.push(input);
          this._trigger_input_controls_updated(input_type, 'started', active, input);
        }
      }
    },
    'Input Ended': function(data) {
      console.log('input control received "Input Ended"', data);
      var input = data.input;
      if(input_types.hasOwnProperty(input)) {
        let input_type = input_types[input];
        let active = this._input_control[input_type];
        let active_index = active.indexOf(input);
        if(active_index !== -1) {
          active.splice(active_index, 1);
          this._trigger_input_controls_updated(input_type, 'ended', active, input);
        }
      }
    }
  },

  _trigger_input_controls_updated: function(input_type, status, active_controls, changed) {
    this.trigger(type_event_name_map[input_type], {
      type: input_type,
      status: status,
      active: active_controls,
      changed: changed
    });
  }
});