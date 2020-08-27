function populateNavbar() {
  $('body').prepend(
    '<div id="custom-navbar-container">' +
      '<div id="custom-navbar">' +
        '<div id="mobile-menu" class="d-flex d-md-none justify-content-center align-items-center h-100">' +
          '<i id="hamburger" class="fas fa-bars"></i>' +
        '</div>' +
        '<div id="desktop-menu" class="d-none d-md-flex justify-content-end align-items-center h-100 pr-5"></div>' +
      '</div>' +
      '<div id="mobile-menu-items" class="d-none w-100 position-absolute"></div>' +
    '</div>'
  );
  populateMenu();
}

function populateMenu() {
  $.each(menuItems(), function(_, item) {
    $('#mobile-menu-items, #desktop-menu').append(
      '<div class="py-3 pl-3 p-md-0 m-0 ml-md-5">' +
        `<a href="${item.link}.html">` +
          `<i class="${item.iClass}"></i>` +
          `<span class="m-1">${item.title}</span>` +
        '</a>' +
      '</div>'
    )
  })
}

function menuItems() {
  var menuItemsArray = []
  var currentPage = window.location.href.split("/").slice(-1)[0]
  if (currentPage !== 'index.html') menuItemsArray.push({ title: 'Home', iClass: 'fas fa-home', link: 'index' })
  if (currentPage !== 'my_story.html') menuItemsArray.push({ title: 'My story', iClass: 'fas fa-globe', link: 'my_story' })
  if (currentPage !== 'projects.html') menuItemsArray.push({ title: 'Projects', iClass: 'fas fa-layer-group', link: 'projects' })
  if (currentPage !== 'contact.html') menuItemsArray.push({ title: 'Contact', iClass: 'fas fa-pencil-alt', link: 'contact' })
  return menuItemsArray
}

function typeWriter() {
  var shortPause = 500
  var longPause = 3000
  var veryLongPause = 6000
  var initialPause = 2000
  setTimeout( function(){
    var phrases = [
      {text: 'A duck walks into a bar.', pauseAfter: longPause, typewriter: 'narrator', clearAfter: true},
      {text: 'He asks the bartender,', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any bread?"', pauseAfter: longPause, typewriter: 'duck', clearAfter: true},
      {text: 'The bartender says,', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"No."', pauseAfter: longPause, typewriter: 'bartender', clearAfter: true},
      {text: 'The duck says again,', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any bread?"', pauseAfter: longPause, typewriter: 'duck', clearAfter: true},
      {text: 'The bartender says,', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"No."', pauseAfter: longPause, typewriter: 'bartender', clearAfter: true},
      {text: 'Again, the duck asks,', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any bread?"', pauseAfter: longPause, typewriter: 'duck', clearAfter: true},
      {text: 'The bartender says,', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"No, we have no bread."', pauseAfter: longPause, typewriter: 'bartender', clearAfter: true},
      {text: 'The duck repeats,', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any bread?"', pauseAfter: longPause, typewriter: 'duck', clearAfter: true},
      {text: 'The bartender angrily says,', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"No, we haven\'t got any bread."', pauseAfter: longPause, typewriter: 'bartender', clearAfter: true},
      {text: 'The duck says,', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any bread?"', pauseAfter: longPause, typewriter: 'duck', clearAfter: true},
      {text: 'The bartender says,', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"No, are you deaf? We haven\'t got any bread."', pauseAfter: shortPause, typewriter: 'bartender', clearAfter: 'bartender'},
      {text: '"Ask me again and I\'ll nail your beak to the bar,"', pauseAfter: shortPause, typewriter: 'bartender', clearAfter: 'bartender'},
      {text: '"you irritating little bird!"', pauseAfter: longPause, typewriter: 'bartender', clearAfter: true},
      {text: 'The duck says,', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any nails?"', pauseAfter: longPause, typewriter: 'duck', clearAfter: true},
      {text: 'The bartender says,', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"No."', pauseAfter: longPause, typewriter: 'bartender', clearAfter: true},
      {text: 'The duck says,', pauseAfter: shortPause, typewriter: 'narrator', clearAfter: false},
      {text: '"Got any bread?"', pauseAfter: veryLongPause, typewriter: 'duck', clearAfter: true}
    ];
    var speed = 50;
    var totalPause = 0
    $.each(phrases, function(_, phrase) {
      var totalSpeed = 0
      setTimeout( function() {
        $.each(phrase.text.split(''), function(index, letter) {
          setTimeout( function(){
            $(`#${phrase.typewriter}`).append(letter)
            if (index === phrase.text.length - 1 && phrase.clearAfter) setTimeout( function() {
              phrase.clearAfter === true ? $('.typewriter').text('') : $(`#${phrase.clearAfter}`).text('')
            }, phrase.pauseAfter)
          }, totalSpeed)
          totalSpeed += speed;
        })
      }, totalPause)
      totalPause += (phrase.text.length * speed) + phrase.pauseAfter
    })
  }, initialPause)
}

$('body').on('click touch', '#hamburger', function() {
  $('#mobile-menu-items').toggleClass('d-none')
})

window.onload = function() {
  populateNavbar();
  typeWriter();
}
