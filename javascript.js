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
  if (currentPage !== 'index.html' && window.location.href !== 'https://www.jethrowilliams.com/') menuItemsArray.push({ title: 'Home', iClass: 'fas fa-home', link: 'index' })
  if (currentPage !== 'my_story.html') menuItemsArray.push({ title: 'My story', iClass: 'fas fa-globe', link: 'my_story' })
  if (currentPage !== 'projects.html') menuItemsArray.push({ title: 'Projects', iClass: 'fas fa-layer-group', link: 'projects' })
  if (currentPage !== 'contact.html') menuItemsArray.push({ title: 'Contact', iClass: 'fas fa-pencil-alt', link: 'contact' })
  return menuItemsArray
}

$('body').on('click', '#hamburger', function(click) {
  $('#mobile-menu-items').toggleClass('d-none')
})

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

function populateMyStory() {
  $.each(myStorySections(), function(index, section) {
    $('#my-story-container').append(
      (index === 0 ? '<div class="row"><div class="col-12 col-md-10 offset-md-1 text-center" id="page-shortcuts"></div></div>' : '') +
      `<div class="row ${(index +1) < myStorySections().length ? 'gap-beneath' : ''}" id="${sectionId(section.title)}">` +
        '<div class="col-12 col-md-10 offset-md-1">' +
          '<div class="p-2 px-md-5 py-md-3 story-part">' +
            `<h2 class="text-left">${section.title}</h2>` +
            $.map(section.content, function(paragraph, _) { return `<p>${paragraph}</p>` }).join('') +
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
    { title: 'The pre-coding years', content: [
      "As I graduated with a business degree in 2008, it was of the firm belief that the world was too big, and life too short to spend the next forty years sitting in an office.",
      "So rather than follow my peers into a career I could not escape, I picked-up my backpack, at this time with only a few months of travel under its belt, and left... indefinitely.",
      "Money was always an issue, so I stopped for work when I needed to, and the rest of the time travelled on the tightest of budgets, sometimes hitch-hiking and sleeping in the one-man tent that resided in my backpack, and other times on the cheapest public transport I could find and staying in hostel dorms or couch-surfing. A lifestyle which in four years took me to more of the world than most people see in a lifetime.",
      "Yet you can have too much of a good thing. Travel, like anything, can become mundane. As it had for me. When you've been to dozens of countries, or stayed in hundreds of hostels, do you care if you go to one more?",
      "I needed some meaning in my life. Some stability, and a place to call home. I'd had years of staying in shared rooms for one or two nights at a time, and owning only the possessions that could fit in my backpack. Meeting people, becoming great friends, then two days later never seeing them again.",
      "The excitement of seeing the world had worn-off, and I sought new spark from life. Yet I did not wish to return home, to the country I'd spent the preceding twenty-two years. What unknown could welcome me to the place that I'd grown up?",
      "Instead I endeavoured to build a deeper connection to the places that I went. Something that could not come from spending just days is every location I visited.",
      "Money was also tight, so I turned to the one skill bestowed upon me as a birthright, yet sought the world over: English.",
      "In Bangkok I attained the Cambridge University CELTA teaching qualification, and for six more years I remained abroad, teaching English as a foreign language.",
      "It was a career I immediately took to. I relished the emotional reward that came from sharing knowledge with people much more than the financial reward, and took the responsibility of being able to help shape people's futures very seriously.",
      "That is not to say the financial reward was insufficient. Even though I earned far less than I could have lived comfortably on in London, by local standards I earned far above average, and lived a very good life because of it.",
      "But alas, as much as I enjoyed my chosen career, it was not one I felt that I could do forever.",
      "Although I was financially comfortable by local standards, it was a job that would never afford me a retirement. Nor were there opportunities for promotion, or progression. This would be it. And I didn't want to make the same mistake as some of the older teachers that I worked with, of teaching until it was too late to do anything else. So at the end of my fifth year as a teacher, I made a promise to myself that the next year, the sixth, would be my last. And I'd use that year to find my path.",
      "I had one year to explore any pipe-dreams that I had, to see if I could turn them into a reality.",
      "I'd always wanted to be a novelist. So one day I sat down at my laptop, and I started to write a book.",
      "I got five thousand words into it before I realised... I've got nothing left to write. And I appreciated that being a writer wasn't the right career for me."
    ]},
    { title: 'Hello World', content: [
      "Another of my pipe-dreams had been to become a software engineer. Specifically, I wanted to create iPhone apps.",
      "For years there had been apps that I wished existed, and I kept on waiting for people to make them, but no one ever did.",
      "With no coding knowledge, other than a teach yourself HTML and CSS book from more than a decade earlier, the idea of creating these apps myself seemed very far-fetched. But this year was about exploring unlikely dreams.",
      "I'd always felt I'd be good at coding. I'm a logical-thinking person. I enjoy playing Tetris, and sudoku for example. I pay great attention to detail, to an almost unhealthy level. And I'm tenacious, resourceful, and not afraid to follow my own path.",
      "With what little knowledge I possessed, I felt that these personality traits would guide me well into coding.",
      "The biggest obstacle I faced however, was for someone who'd learned financial responsibility to an extent most don't have to, by sleeping outdoors sometimes to save $10 on a hostel while I was backpacking, the idea of spending what to me at the time would be a small fortune on a MacBook, seeing as the £300, 5 year old Windows laptop that I currently owned, couldn't help me to make iPhone apps, was daunting.",
      "For my own peace of mind, I had to know with reasonable certainty that I wasn't going to give up on this dream as easily as I had that of becoming a writer. But after weeks of flip-flopping back and forth, I eventually convinced myself to take the plunge, under the guise that... I don't want to spend my life not knowing. Of having a lifetime of asking, 'what if?'",
      "Living again in Bangkok, in what was now just after New Year of 2018, I took the train to the shopping mall that I'd frequented on many of the days prior to use the MacBooks that they had on display there, and bought what was then, and is until now, by far the most expensive thing I've ever bought: A brand new MacBook Pro.",
      "I started with a Udemy course, then later moved onto the 'Hacking with Swift' book as my introduction to coding. I'd chosen to learn Swift, as my goal at this time was still to create iPhone apps.",
      "And I took to it like a drug. I relished the moments when I would sit there exasperated, swearing at my computer. They were worth it for the moments ecstasy of finally figuring-out what was wrong, and I could fix the bug that had taunted me for hours.",
      "Yet, although I was learning, and very much enjoying doing so, I was still working full-time as an English teacher. And had come to appreciate that learning to code could not be a part-time hobby that I did as an aside from my job, if I truly wanted to turn it into a career. When work was busy, I'd sometimes have to go weeks without coding anything, as my supposedly 'free time' was taken up with planning lessons and correcting student essays.",
      "I had to make a choice. I could either focus all my energy on coding, and give up teaching. Or I could do the opposite. But there just weren't enough hours in the day for both.",
      "It was with a heavy heart that I turned my back on my six-year teaching career. And I did so with the realisation that it would mean leaving Bangkok; a place that now in my second stint living here, had been my home for the last three years, and the place I was more settled than at any other point in my adult life.",
      "After years of living out of a backpack, I now had the greatest of luxuries that you miss when you're travelling.",
      "Comfort. Familiarity. Local knowledge. A place to call home. Things that you only really appreciate when you've had to live without them. I was going to throw all of these away, to fit my life into a backpack once again.",
      "I'd decided that I was leaving my job and my career as a teacher, but had long been thinking about the best way to learn to code. Money was a huge factor, and leaving my job and my career behind, I could no longer treat coding as a hobby. I had to turn it into an income. And fast.",
      "Initially my intention had been to find a quiet, secluded, cheap corner of the world, to lock myself away, live off my savings, and not emerge again until I'd been able to secure a job as a developer. But after a whimsical conversation, a colleague sent me a link to <a href='https://www.freecodecamp.org/news/how-i-landed-a-full-stack-developer-job-without-a-tech-degree-or-work-experience-6add97be2051/' target='_blank'>an article</a> that changed my life.",
      "I wrestled with the cost of attending a bootcamp versus the time that could buy me teaching myself. I researched, I pondered, I contacted anyone I could. But ultimately I decided that, just like the English teaching course I'd attended six years earlier, if I wanted to learn to code, and to do so quickly, then this was the best way. Following an established curriculum and having people on hand to ask for assistance, would be worth the money. And six years a teacher, of watching some students succeed and others fail, I knew what it took to learn. I knew how much I was going to have to put into this. But I knew that I could do it.",
    ]},
    { title: 'The bootcamp', content: [
      "For just as long as I'd wrestled with the idea of doing a bootcamp, I had contended with which one.",
      "I eventually settled on Le Wagon, and pondered their campuses in London, Barcelona and Tel-Aviv, before eventually settling on, due to it's low cost of living and proximity to Bangkok, Le Wagon Bali.",
      "I had a fear; in fact I considered it inevitable, that attending a bootcamp is such an idyllic location, I wouldn't be joined by peers with the same level of dedication that I had. So I made a promise to myself that no matter what, I wouldn't follow their lead and let my dedication slip.",
      "If I put my all into this, and I failed, I could live with that. The pain of failure is nothing compared to the pain of regret. It would be if I didn't apply myself, and then I failed, that I would spend my life wondering what could have been.",
      "And I was right in my assumption that many on the bootcamp were using their time in Bali as an excuse to party, or to learn to surf. So where as they would go to a bar in the evening, after ten hours at the school, I'd instead take my laptop back to my Airbnb, and code some more.",
      "It was a truly draining eight weeks.",
      "Thanks to Indonesia's visa restrictions, the usually nine-week bootcamp had to be compressed into eight, so most weeks we only had one day off. But that didn't really matter to me. I'd code on Sundays anyway. This was my one chance to turn coding into a career, and I wasn't going to waste a second of it.",
      "Attending the bootcamp had meant a U-turn away from my previous goal of designing iPhone apps. The ultimate goal of this course was to learn Ruby on Rails, although learning the various components of Ruby, OOP, SQL and Active Record, HTML, CSS, Javascript and product design beforehand, when we finally got to Rails in the middle of week 5, I actually felt very prepared for it.",
      "And perhaps the greatest lesson of the bootcamp wasn't learning to code at all, it was learning to collaborate. Something that at this level, in a group of four people probably slowed us down more than had we been working alone. But I quickly appreciated that, out in the real world, working with others would be a wholly necessary skill.",
      "There was stress, and anguish, and frustration and disagreement. But ultimately, the team of me, and my teammates Hilmar, Owain and Will, prevailed by building two apps together.",
      "The first was an Airbnb clone, named 'Off the Wagon,' where bootcamp graduates could rent themselves out to future students and other coders, who needed a short amount of someone's time. Maybe they needed help fixing a bug.",
      "And then our final project, the culmination of eight weeks of work, was an app, unfortunately called BUIDL, that using just your username, would visualise your Github profile, so that you could present yourself, even to non-coders."
    ]},
    { title: 'Off the wagon', content: [
      "For ten hours a day, six days a week, for two months I'd sat in that school. Been around those people. And then suddenly, it was over. This was it. I was out in the world alone again, most of my savings gone. It was the rubber meets the road moment, where I had to put all of my asumptions that I'd held before going to the bootcamp, to the test.",
      "Was I, as I'd hoped before it had started, now equipped to get a job? Could this now be my career? Or had I completely miscalculated? Had I given up my life in Bangkok and spent all this money on the bootcamp, and was still not ready?",
      "There was only one way to find out.",
      "I'd learned an indescribable amount over these eight weeks. But I was also aware that, if I stopped using it, that knowledge would leave my head as quickly as it had arrived. So the morning after the bootcamp finished, still drunk from the celebration of the success of our project demo the night before, I got out my laptop. And just like every other day since I'd arrived in Bali, I started coding.",
      "The big difference now, was that I was alone.",
      "After two months of having classmates and teachers I could ask for help, I was about to find out if I could do it without them.",
      "A little over ten years after I'd left, my flight back to London was booked.",
      "I had a pre-planned stop in Singapore for a couple of days on the way, but despite never going there, the excitement of travelling had still not returned to me, and this visit to Singapore was more of an inconvenience than a holiday. I just wanted to code, and I could do that more comfortably from my own room in London than an Airbnb in Singapore.",
      "And I wanted to, no I had to, complete a full app, from start to finish, alone. I had to prove it to myself that I could.",
      "Working in a group at the bootcamp had been a learning experience in itself. But it also meant that I'd only done a quarter of the work. And while everything was fresh in my mind, I had to plug those gaps in my knowledge.",
      "That, and it would be a darn sight easier applying for jobs if I could show an app that I'd created, from the beginning, myself.",
      "I was as anxious about this as I was with the bootcamp, and despite now being over the other side of the world, I considered it a continuation of the bootcamp. Although it was a little hard to trick myself I was on the beach in Bali in London's December weather, my dedication to coding did not wane.",
      "It took all of the stress and swearing at my computer screen that I could muster. But after a little over two weeks, I finally emerged. An app, built from nothing, with no help from anyone, online and working. I had done it.",
      "I was proud of myself with how far I'd come so quickly. Getting a working rails application that included 19 interconnected models, several forms, user-to-user messaging, photo uploads and many other features of this recipes app, online and working less than three months after writing 'Hello World' in Ruby, was an achievement I was proud of. But it was not my goal.",
      "If I couldn't turn coding into an income before my savings ran-out, then I'd have to return to teaching or whatever other job I could find. And working again, with coding as a side-hobby, would push the dream further away than it was now.",
      "I had to get a job. I had to.",
      "Now, just before Christmas, was not the idea time to be applying for jobs. Even sending-out applications on Christmas day, I figured they'd at least be waiting in someone's inbox once they returned in January. And in the few days when most offices around the country were closed, I sent-out ~85 job applications.",
      "I was fully aware that I was an inexperienced developer trying to get a job in a knowledge-based industry. But I just needed a shot. I just needed the chance to prove myself, and I knew I could do it. And if you throw enough shit at the wall, some of it will eventually stick. One of these applications would have to come back successfully... right?",
      "If anything, I actually over did it.",
      "Because all the offices around the country were closed for Christmas, I sent all these applications with no inkling as to whether they'd be successful or not. Until January 2nd, when everyone got back to work, and oh fuck my phone won't stop ringing.",
      "I'd read so many horror stories about technical interviews that I was looking at the job application process as a learning experience in itself.",
      "I was probably going to flunk a few phone interviews before I finally made it to the next stage, and I'd probably flunk a few technical interviews before I got a job. But don't look at each one as failure, look at it as a learning experience. With each one you'll get better. And eventually you'll get there.",
      "If anything, I'd actually over-estimated the challenge before me. The amount of responses had been overwhelming, and far more than I was expecting. And in actuality it took just one technical interview before, one month after arriving back into the country, I let out this primal scream, as everything; all the sacrifice of the last few months, suddenly became worth it.",
      "I'd done it. My first job as a software engineer.",
      "If this bootcamp had been World War II, then I was Poland.",
      "While my peers from The West finished the war and went home, my battle was just beginning. I had the Russians to worry about.",
      "What I mean is that this wasn't the end. This wasn't even the beginning of the end. It was perhaps the end of the beginning, but I still had a lifetime of learning ahead of me.",
      "Thanks to the bootcamp I could qualify myself as a junior software engineer. I had a foundational knowledge, but I could not kid myself that it was any more than that. And even though I was now being paid to code, rather than the other way around, my desire for learning could not waiver.",
      "So right up until Covid took my job from me in August 2020, I tried to progress and learn every single day.",
      "And even since, barely a day has gone by that I haven't coded something, as the blessing of free-time gave me the opportunity to work on my own projects.",
      "And now, I'm looking to progress even further. For my next opportunity to grow as a software engineer.",
      "I have no regrets about my chosen career path. I enjoy it, and relish the challenge, just as I thought I would. I have the aptitude to be very good at this, just as I thought I would. But this is now a career to me. One that I expect to do for as long as I have a career. So I'm looking to grow, and progress, and do whatever I have to do to take the next step in challenge and responsibility.",
      "And it is with pride that I now look in the mirror, and call myself a software engineer. As what I once thought was a pipe-dream, is now my reality."
    ]}
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

function populateContacts() {
  $.each(contactItems(), function(index, item) {
    $('#contacts-container').append(
      (item.url ? `<a href="${item.url}" target="_blank">` : '') +
        `<div class="p-2 px-md-5 py-md-3 ${index !== 0 ? 'mt-3' : ''} contacts-part">` +
          '<div class="row">' +
            '<div class="col-12 col-md-4 text-center">' +
              `<i class="${item.iClass}"></i>` +
            '</div>' +
            '<div class="col-12 col-md-8 d-flex justify-content-center justify-content-md-start align-items-center">' +
              `<p class="m-0">${item.name}</p>` +
            '</div>' +
          '</div>' +
        '</div>' +
      (item.url ? '</a>' : '')
    )
  })
}

function contactItems() {
  return [
    { name: 'jro31', iClass: 'fab fa-github', url: 'https://github.com/jro31' },
    { name: 'jethrowilliams', iClass: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/jethrowilliams/' },
    { name: '&#99;&#111;&#110;&#116;&#97;&#99;&#116;&#64;&#106;&#101;&#116;&#104;&#114;&#111;&#119;&#105;&#108;&#108;&#105;&#97;&#109;&#115;&#46;&#99;&#111;&#109;', iClass: 'far fa-envelope', url: null }
  ]
}

window.onload = function() {
  populateNavbar();
  typeWriter();
  populateMyStory();
  populateTimeline();
  populateContacts();
}
