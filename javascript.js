function typeWriter() {
  setTimeout( function(){
    var sentences = [
      ['This is the first sentence', 2000],
      ['This is the second sentence', 4000],
      ['This is the third sentence', 0]
    ];
    var speed = 50;
    var totalPause = 0
    $.each(sentences, function(_, value) {
      var totalSpeed = 0
      setTimeout( function() {
        $('#typewriter').text('')
        $.each(value[0].split(''), function(_, letter) {
          setTimeout( function(){ $('#typewriter').append(letter) }, totalSpeed)
          totalSpeed += speed;
        })
      }, totalPause)
      totalPause += value[1]
    })
  }, 2000)
}

window.onload = typeWriter;
