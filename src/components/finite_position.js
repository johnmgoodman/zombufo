Crafty.c('FinitePosition', {

  init: function() {
    this.addComponent('2D');
    this._finite_vertical_max = null;
    this._finite_vertical_min = null;
    this._finite_horizontal_max = null;
    this._finite_horizontal_min = null;
  },

  events: {
    "Move": function() {
      this._handle_vertical();
      this._handle_horizontal();
    }
  },

  finite_vertical: function(range) {
    if(typeof range === 'undefined') {
      return [this._finite_vertical_min, this._finite_vertical_max];
    }

    this._finite_vertical_min = range[0];
    this._finite_vertical_max = range[1];
    return this;
  },

  finite_horizontal: function(range) {
    if(typeof range === 'undefined') {
      return [this._finite_horizontal_min, this._finite_horizontal_max];
    }

    this._finite_horizontal_min = range[0];
    this._finite_horizontal_max = range[1];
    return this;
  },

  _handle_vertical: function() {
    var y = this._y;
    var min = this._finite_vertical_min;
    var max = this._finite_vertical_max;
    if(min !== null && y < min) {
      this.y = min;
    } else if(max !== null && y > max) {
      this.y = max;
    }
  },

  _handle_horizontal: function() {
    var x = this._x;
    var min = this._finite_horizontal_min;
    var max = this._finite_horizontal_max;
    if(min !== null && x < min) {
      this.x = min;
    } else if(max !== null && x > max) {
      this.x = max;
    }
  }
});