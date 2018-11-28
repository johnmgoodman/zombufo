describe('zombufo', function() {
  var zombufo;

  beforeEach(function() {
    zombufo = require('../src/zombufo');
  });

  it('is a function', function() {
    expect(typeof zombufo).toBe('function');
  });

  it('has .entity and .e (same reference)', function() {
    expect(zombufo.entity).toBeDefined();
    expect(zombufo.e).toBeDefined();
    expect(zombufo.entity).toBe(zombufo.e);
  });

});