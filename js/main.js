var $body = $('body');

$('html').on('keydown', function (e) {
  var $newBall = $('<div>');
  var newLeft = Math.floor(Math.random() * (1000 - 0)) + 0;
  var newTop = Math.floor(Math.random() * (1000 - 0)) + 0;

  $newBall.addClass('ball');
  $body.append($newBall);
  $newBall.css('left', newLeft)
  $newBall.css('top', newTop)

});



