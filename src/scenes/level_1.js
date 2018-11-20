Crafty.defineScene('Level 1', function(setup) {
  console.log('Level 1!');
  zombufo.e('Keyboard');
  zombufo.e('GreenSquare')
    .attr({x: 50, y:50})
    .size(30)
    .origin('center');
  zombufo.e('RedSquare')
    .attr({x: 30, y:10})
    .size(24);
});