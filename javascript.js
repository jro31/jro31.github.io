var shortPause = 500
var longPause = 3000

function typeWriter() {
  var initialPause = 2000
  setTimeout( function(){
    var phrases = [
      {text: 'A duck walks into a bar and asks the bartender', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any bread?"', pauseAfter: longPause, typewriter: 'duck', clearAfter: true},
      {text: 'The bartender says', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"No"', pauseAfter: longPause, typewriter: 'bartender', clearAfter: true},
      {text: 'The duck says again', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any bread?"', pauseAfter: longPause, typewriter: 'duck', clearAfter: true},
      {text: 'The bartender says', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"No"', pauseAfter: longPause, typewriter: 'bartender', clearAfter: true},
      {text: 'Again, the duck asks', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any bread?"', pauseAfter: longPause, typewriter: 'duck', clearAfter: true},
      {text: 'The bartender says', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"No, we have no bread"', pauseAfter: longPause, typewriter: 'bartender', clearAfter: true},
      {text: 'The duck repeats', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any bread?"', pauseAfter: longPause, typewriter: 'duck', clearAfter: true},
      {text: 'The bartender angrily says', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"No, we haven\'t got any bread"', pauseAfter: longPause, typewriter: 'bartender', clearAfter: true},
      {text: 'The duck says', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any bread?"', pauseAfter: longPause, typewriter: 'duck', clearAfter: true},
      {text: 'The bartender says', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"No, are you deaf? We haven\'t got any bread, ask me again and I\'ll nail your beak to the bar, you irritating little bird!"', pauseAfter: longPause, typewriter: 'bartender', clearAfter: true},
      {text: 'The duck says', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any nails?"', pauseAfter: longPause, typewriter: 'duck', clearAfter: true},
      {text: 'The bartender says', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"No"', pauseAfter: longPause, typewriter: 'bartender', clearAfter: true},
      {text: 'The duck says', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any bread?"', pauseAfter: longPause, typewriter: 'duck', clearAfter: true}
    ];
    var speed = 50;
    var totalPause = 0
    $.each(phrases, function(_, phrase) {
      var totalSpeed = 0
      setTimeout( function() {
        $.each(phrase.text.split(''), function(index, letter) {
          setTimeout( function(){
            $(`#${phrase.typewriter}`).append(letter)
            if (index === phrase.text.length - 1 && phrase.clearAfter) setTimeout( function() { $('.typewriter').text('') }, phrase.pauseAfter)
          }, totalSpeed)
          totalSpeed += speed;
        })
      }, totalPause)
      totalPause += (phrase.text.length * speed) + phrase.pauseAfter
    })
  }, initialPause)
}

window.onload = typeWriter;
