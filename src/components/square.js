Crafty.c('Square', {
  init: function() {
    this.addComponent('2D, DOM');
  },

  size: function(square_size) {
    if(typeof square_size === 'undefined')
      return this._size;

    this.w = square_size;
    this.h = square_size;
    this._size = square_size;
    return this;
  }
});