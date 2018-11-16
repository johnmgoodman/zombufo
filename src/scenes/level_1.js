Crafty.defineScene('Level 1', function(setup) {
  console.log('Level 1!');
  zombufo.e('GreenSquare')
    .attr({x: 0, y:0})
    .size(30);
  zombufo.e('RedSquare')
    .attr({x: 30, y:10})
    .size(24);
});