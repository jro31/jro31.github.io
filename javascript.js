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

function populateMyStory() {
  $.each(myStorySections(), function(index, section) {
    $('#my-story-container').append(
      (index === 0 ? '<div class="row"><div class="col-12 col-md-10 offset-md-1 text-center" id="page-shortcuts"></div></div>' : '') +
      `<div class="row ${(index +1) < myStorySections().length ? 'gap-beneath' : ''}" id="${sectionId(section.title)}">` +
        '<div class="col-12 col-md-10 offset-md-1">' +
          '<div class="p-2 px-md-5 py-md-3 story-part">' +
            `<h2 class="text-left">${section.title}</h2>` +
            $.map(section.content, function(paragraph, _) { return `<p>${paragraph}</p>` }) +
          '</div>' +
        '</div>' +
      '</div>'
    )
    $('#page-shortcuts').append(
      `<a href="#${sectionId(section.title)}"><p class="mb-1">${section.title}</p></a>`
    )
  })
}

function myStorySections() {
  return [
    { title: 'The pre-coding years', content: ['Once upon a time in somewhere...', 'Second paragraph'] },
    { title: 'Section 2', content: ['Second section', 'More'] }
  ]
}

function sectionId(title) {
  return title.toLowerCase().replace(/[^0-9a-z]/gi, '-')
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
              '<p class="project-description">' +
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
  return [
    { year: 2018, title: 'Hangman', languages: ['Swift'], description: "My coding journey started in 2018 by self-teaching Swift using the 'Hacking with Swift' book, as my initial goal from coding was to make iPhone apps. The book issued various challenges, and this one I consider the first app that I really created myself (I don't count 'Hello World'), as it didn't offer any example code to get you started. So it was just me, the things I'd learnt and Google, against the world. Three days and lots of swearing later, I'd done it; a fully-working iPhone hangman app.", site_url: null, github_url: 'https://github.com/jro31/Hangman' },
    { year: 2018, title: 'Notes', languages: ['Swift'], description: "Imitation is the highest form of flattery, and four challenges later, we'd gone from novice coders to aiming to replicate Apple's own apps. In a variation of Gordon Ramsey's taste it then make it, the challenge was to re-create the iPhone's 'Notes' app.", site_url: null, github_url: 'https://github.com/jro31/Notes' },
    { year: 2018, title: 'Mister Cocktail', languages: ['Ruby on Rails'], description: "Now at the Le Wagon bootcamp, we'd made several smaller apps by this point, but 'Mister Cocktail' was the first one that really felt complete and publishable. It includes all CRUD methods, user sign-in, photo upload and the Pundit gem for authorization.", site_url: null, github_url: 'https://github.com/jro31/rails-mister-cocktail' },
    { year: 2018, title: 'Off the Wagon', languages: ['Ruby on Rails'], description: "Up until this point, I'd made all of the apps in this list alone. That all changed with 'Off the Wagon', an Airbnb clone for coding bootcamp graduates to rent-out their time to future students, or anyone else really, who needed some short-term assistance to, for example, fix a bug that they'd got stuck on. In a collaborative project of four of us, this was the pre-cursor to the final Le Wagon project, and was an eye-opener in the challenge of working collaboratively. Having to consider the actions of others while coding presented challenges we hadn't encountered yet, and this project bore the scars of it. Still, we successfully completed the project.", site_url: null, github_url: 'https://github.com/jro31/offthewagon' },
    { year: 2018, title: 'BUIDL', languages: ['Ruby on Rails'], description: "With a name not of my choosing, BUIDL was our big final project from the bootcamp. The culmination of two months of stress and anguish as we all went from little-to-no coding knowledge, to building an app for the then-upcoming demo-day, the crowning moment of the Le Wagon bootcamp. The idea was simple: An app to allow people present their Github profile in a clean and easily-readable manner. Simple enter your Github username, and using the Github API, your profile will be presented in graphs and charts readable even by non-coders.", site_url: null, github_url: 'https://github.com/jro31/buidl' },
    { year: 2018, title: 'Plant as Usual', languages: ['Ruby on Rails'], description: "The bootcamp had been an amazing learning experience. But through it's latter stages lingered in my mind the question... how would I do when there was no one there to ask for help? Plant as Usual was my answer to that question. With the bootcamp behind me, no teachers to get help from, and no team-mates to ask questions to, could I still build a functioning website? And suddenly being entirely responsible for my progress, considering how much time, money and sacrifice I'd invested into the bootcamp, was a nerve-wracking thing. But it was a challenge I dived head first into, starting Plant as Usual that morning after the bootcamp finished. And although I struggled somewhat, as I expected to, two weeks later I emerged with a fully-functional Rails app, built off nothing but my own sweat and stress. But I did it. A website for people to come and add their own plant-based recipes, complete with WhatsApp style messaging system, an add-a-recipe flow, recpie comments, Devise authentication, Pundit Authorization, and a whole lot more.", site_url: null, github_url: 'https://github.com/jro31/plantasusual' },
    { year: 2019, title: 'Rentify', languages: ['Ruby on Rails', 'RSpec', 'React', 'Redux'], description: "Plant as Usual had been an eventual success, but its purpose had always as a tool to turn coding into my career, which started with Rentify. From January 2019 to August 2020, I was one quarter of the software engineering team at Rentify, a service revolutionising the property market. Working over the full stack of the project, I was charged with creating the tools to allow our team of negotiators and property manager to handle all aspects of bringing on and managing properties; from rent payments to maintenance tickets to connecting energy suppliers to creating contracts and a whole lot more, I had a hand in all parts of the software we used. And in cutting my teeth here, I learned the importance of writing DRY, readable, specced code. Touching all elements on the backend and the front, I gained an expertise in Rails, Rspec, HTML, CSS, vanilla Javascript and jquery, as well as significant time learning React and Redux. Brought to a premature conclusion by Coronavirus, having arrived at Rentify a novice Rails programmer, I left fully confident in my ability to code in Rails to a level far higher than someone with my experience should be able to.", site_url: 'https://www.rentify.com', github_url: null },
    { year: 2020, title: 'Plant as Usual 2.0', languages: ['Ruby on Rails', 'RSpec', 'jquery'], description: "The crown jewel of my personal projects. Now with the experience to do it better than I had before, I decided to rewrite my first post-bootcamp project from the ground up. My experience to this point had taught me errors that even the most experienced developers make, and I wanted to make an app that avoided them. I wanted the code to be clean, DRY and easily-readable, I wanted every method to be specced, and I wanted a foundation built so that I could be confident that changing one thing, wouldn't break something else. A simple styling example being that you should be able to resize elements without concerning yourself about resizing others to fit them. With <a href='https://github.com/jro31/Plant-as-Usual-2/blob/979437e6b6470dea5684d1f5300c581016c62443/app/assets/stylesheets/config/_sizes.sass#L24' target='_blank'>the navbar</a> for example, all positions and widths are calculated from base values. So if you want to change the navbar height, go ahead. The rest of the elements will resize accordingly. Styling is the most simple of examples I could give, but it translated to all parts of the app, where no code was duplicated, so you could know that changing something in one place would be sufficient. Using this philosophy, the site's features include dark mode and an ajax-powered recipe page where you can update all parts of a recipe including the ingredients and photo, without leaving the show page. An ambitious but ultimately successful reimagination of how you can create a recipe, on an app with large growth potential and many more features to come.", site_url: 'https://www.plantasusual.com', github_url: 'https://github.com/jro31/Plant-as-Usual-2' }
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
  populateMyStory();
}
