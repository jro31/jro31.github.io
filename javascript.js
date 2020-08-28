function populateNavbar() {
  $('body').prepend(
    '<div id="custom-navbar-container">' +
      '<div id="custom-navbar">' +
        '<div id="mobile-menu" class="d-flex d-md-none justify-content-center align-items-center h-100">' +
          '<a href="#"><i id="hamburger" class="fas fa-bars"></i></a>' +
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

function populateTimeline() {
  var currentYear = null
  $.each(timelineItems(), function(index, item) {
    $('#timeline-container').append(
      '<div class="row">' +
        '<div class="col-12 col-md-10 offset-md-1">' +
          '<div class="d-flex justify-content-center timeline-part">' +
            '<div class="col-2 pl-2 py-2 pr-0 pl-md-5 py-md-3">' +
              (item.year !== currentYear ? `<p class="timeline-year text-center">${item.year}</p>` : '') +
            '</div>' +
            (index === 0 ? '<div class="col-2 col-md-1 pt-2 px-0 pt-md-3 d-flex flex-column align-items-center">' : '<div class="col-2 col-md-1 px-0 d-flex flex-column align-items-center">' ) +
              (index !== 0 ? '<div class="timeline-line timeline-top-line"></div>' : '') +
              (item.year !== currentYear ? '<div class="timeline-circle"></div>' : '' ) +
              '<div class="timeline-line timeline-bottom-line"></div>' +
            '</div>' +
            '<div class="col-8 col-md-9 pl-0 pl-md-2 pr-2 py-2 pr-md-5 py-md-3">' +
              `<h2 class="text-left">${item.title}</h2>` +
              `<h4>${item.languages.join(', ')}</h4>` +
              '<p>' +
                item.description +
              '</p>' +
              '<p>' +
                (item.site_url ? `<a href="${item.site_url}" target="_blank">${item.site_url.split("//")[1]}</a>` : '' ) +
                (item.site_url && item.github_url ? ', ' : '') +
                (item.github_url ? `<a href="${item.github_url}" target="_blank">View on Github</a>` : '') +
              '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    )
    currentYear = item.year

    if ((index + 1) < timelineItems().length) {
      addTimelineGap()
    }
  })
}

function timelineItems() {
  // { year: , title: , languages: [], description: "", site_url: , github_url: },
  return [
    { year: 2018, title: 'Hangman', languages: ['Swift'], description: "My coding journey started in 2018 by self-teaching Swift using the 'Hacking with Swift' book, as my initial goal from coding was to make iPhone apps. The book issued various challenges, and this one I consider the first app that I really created myself (I don't count 'Hello World'), as it didn't offer any example code to get you started. So it was just me, the things I'd learnt and Google, against the world. Three days and lots of swearing later, I'd done it; a fully-working iPhone hangman app.", site_url: null, github_url: 'https://github.com/jro31/Hangman' },
    { year: 2018, title: 'Notes', languages: ['Swift'], description: "Imitation is the highest form of flattery, and four challenges later, we'd gone from novice coders to aiming to replicate Apple's own apps. In a variation of Gordon Ramsey's taste it then make it, the challenge was to re-create the iPhone's 'Notes' app.", site_url: null, github_url: 'https://github.com/jro31/Notes' },
    { year: 2018, title: 'Mister Cocktail', languages: ['Ruby on Rails'], description: "Now at the Le Wagon bootcamp, we'd made several smaller apps by this point, but 'Mister Cocktail' was the first one that really felt complete and publishable. It includes all CRUD methods, user sign-in, photo upload and the Pundit gem for authorization.", site_url: null, github_url: 'https://github.com/jro31/rails-mister-cocktail' },
    { year: 2018, title: 'Off the Wagon', languages: ['Ruby on Rails'], description: "Up until this point, I'd made all of the apps in this list alone. That all changed with 'Off the Wagon', an Airbnb clone for coding bootcamp graduates to rent-out their time to future students, or anyone else really, who needed some short-term assistance to, for example, fix a bug that they'd got stuck on. In a collaborative project of four of us, this was the pre-cursor to the final Le Wagon project, and was an eye-opener in the challenge of working collaboratively. Having to consider the actions of others while coding presented challenges we hadn't encountered yet, and this project bore the scars of it. Still, we successfully completed the project.", site_url: null, github_url: 'https://github.com/jro31/offthewagon' },
    { year: 2018, title: 'BUIDL', languages: ['Ruby on Rails'], description: "With a name not of my choosing, BUIDL was our big final project from the bootcamp. The culmination of two months of stress and anguish as we all went from little-to-no coding knowledge, to building an app for the then-upcoming demo-day, the crowning moment of the Le Wagon bootcamp. The idea was simple: An app to allow people present their Github profile in a clean and easily-readable manner. Simple enter your Github username, and using the Github API, your profile will be presented in graphs and charts readable even by non-coders.", site_url: null, github_url: 'https://github.com/jro31/buidl' },
  ]
}

function addTimelineGap() {
  $('#timeline-container').append(
    '<div class="row timeline-gap">' +
      '<div class="col-12 col-md-10 offset-md-1">' +
        '<div class="d-flex justify-content-center">' +
          '<div class="col-2 pl-2 pr-0 pl-md-5"></div>' +
          '<div class="col-2 col-md-1 px-0 d-flex flex-column align-items-center">' +
            '<div class="timeline-line"></div>' +
          '</div>' +
          '<div class="col-8 col-md-9 pl-0 pl-md-2 pr-2 pr-md-5"></div>' +
        '</div>' +
      '</div>' +
    '</div>'
  )
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

$('body').on('click', '#hamburger', function(click) {
  $('#mobile-menu-items').toggleClass('d-none')
})

window.onload = function() {
  populateNavbar();
  typeWriter();
  populateTimeline();
}
