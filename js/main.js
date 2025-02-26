const menu = document.getElementById("menu");
const container = document.getElementById("container");
var swiperContainer = document.querySelector('.container');  // Adjust selector to match your container
var hammer = new Hammer(swiperContainer);


var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove:false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel:true,

    on: {
        slideChange: function () {
          const currentIndex = swiper.realIndex;
          document.querySelectorAll('.Links li').forEach(link => link.classList.remove('activeLink'));
          Array.from(document.querySelectorAll('.Links li'))[currentIndex].classList.add('activeLink');
        }
    }
});
function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")
    swiper.slideTo(indx, 1000, true)
}

hammer.on('swiperight', function() {
    console.log('Swiped right');
    var currentIndex = swiper.realIndex;  // Get the current slide index from Swiper.js
    if (currentIndex > 0) {
        // Navigate to previous slide
        Navigate(currentIndex - 1);
    }
});

// Attach swiperight (left swipe to go to previous slide)
hammer.on('swipeleft', function() {
    console.log('Swiped left');
    var currentIndex = swiper.realIndex;  // Get the current slide index from Swiper.js
    if (currentIndex < swiper.slides.length - 1) {
        // Navigate to next slide
        Navigate(currentIndex + 1);
    }
});

function toggleMenu() {
    menu.classList.toggle('open');  
    container.classList.toggle('open'); 
}

function handleResize() {
    const width = window.innerWidth;
    
    if (width > 992) {
        menu.classList.remove('open');
        container.classList.remove('open');
    }
}

window.addEventListener('resize', handleResize);
handleResize();
