Crafty.c('RigidBody', {
  init: function() {
    this.addComponent('2D');
    this._velocity_y = 0;
    this._velocity_x = 0;
    this._angular_velocity = 0;
    this._mass = 0;
  },

  events: {
    "UpdateFrame": function(frameData) {
      var dt = frameData.dt / 1000; // delta time in seconds
      this._updatePosition(dt);
      this._updateRotation(dt);
    }
  },

  mass: function(mass) {
    if(typeof mass === 'undefined')
      return this._mass;
    this._mass = mass;
    return this;
  },

  velocity: function(velocity) {
    if(typeof velocity === 'undefined')
      return [this._velocity_x, this._velocity_y];
    this._velocity_x = velocity[0];
    this._velocity_y = velocity[1];
    return this;
  },

  angular_velocity: function(angular_velocity) {
    if(typeof angular_velocity === 'undefined')
      return this._angular_velocity;
    this._angular_velocity = angular_velocity;
    return this;
  },

  
  _updatePosition: function(dt) {
    var dx = dt * this._velocity_x;
    var dy = dt * this._velocity_y;
    this.x = this._x + dx;
    this.y = this._y + dy;
  },

  _updateRotation: function(dt) {
    var dTheta = dt * this._angular_velocity;
    this.rotation = (this._rotation + dTheta) % 360;
  }

});