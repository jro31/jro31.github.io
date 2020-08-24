function typeWriter() {
  var initialPause = 2000
  setTimeout( function(){
    var sentences = [
      // Sentence, pause after, typewriter, clear after
      ['A duck walks into a bar and asks the bartender,', 500, 'narrator', false],
      ['"Got any bread?"', 3000, 'duck', true],
      ['The bartender says', 500, 'narrator', false],
      ['"No"', 3000, 'bartender', false]
    ];
    var speed = 50;
    var totalPause = 0
    $.each(sentences, function(_, value) {
      var totalSpeed = 0
      setTimeout( function() {
        $.each(value[0].split(''), function(index, letter) {
          setTimeout( function(){
            $(`#${value[2]}`).append(letter)
            if (index === value[0].length - 1 && value[3]) setTimeout( function() { $('.typewriter').text('') }, value[1])
          }, totalSpeed)
          totalSpeed += speed;
        })
      }, totalPause)
      totalPause += (value[0].length * speed) + value[1]
    })
  }, initialPause)
}

window.onload = typeWriter;
