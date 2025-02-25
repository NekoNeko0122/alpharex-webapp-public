const menu = document.getElementById("menu");
const container = document.getElementById("container");

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
