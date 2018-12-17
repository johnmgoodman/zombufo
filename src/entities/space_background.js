zombufo.e('Space Setting', function(viewport) {
  var darkness = Crafty.e('Space, DOM, 2D, Color')
    .attr({w: 600, h: 600, x: 0, y: 0, z: -5})
    .color("#001133")

  var stars1 = Crafty.e('Space, DOM, 2D, Image')
    .attr({w: 600, h: 600, x: 0, y:0, z: -4})
    .image('src/assets/space_background_stars_1.png', "repeat");
  
  var stars2 = Crafty.e('Space, DOM, 2D, Image')
    .attr({w: 600, h: 600, x: 0, y: 0, z: -3})
    .image('src/assets/space_background_stars_2.png', "repeat");
  
  Crafty.bind('InvalidateViewport', function() {
    stars1.x = viewport.x / 10;
    stars1.y = viewport.y / 10;
    stars2.x = viewport.x / 5;
    stars2.y = viewport.y / 5;
  });
});