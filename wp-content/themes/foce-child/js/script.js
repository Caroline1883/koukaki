// Fade-in pour chaque section
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('fade-in-section')
            return;
            }
    });        
    });

// observer.observe(document.querySelector('.banner'));
// observer.observe(document.querySelector('.story'));
// observer.observe(document.querySelector('#studio'));
const sections = document.querySelectorAll('section');
sections.forEach(
    section => {observer.observe(section)}
)


//Animation titre

const spans = document.querySelectorAll('span');

const observertitlesOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observerTitle = new IntersectionObserver((entries, observerTitle) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('title-animation');
            observerTitle.unobserve(entry.target);
        }
    });
}, observertitlesOptions);

spans.forEach(span => {
  observerTitle.observe(span);
});

//Accélaration des fleurs au scroll

const root = document.querySelector(':root');
    window.addEventListener('scroll', () => {
    root.style.setProperty('--speed','1s');})
    window.addEventListener('scrollend', () => {
    root.style.setProperty('--speed','3s');
})


//Swiper
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
//   slidesPerView: 3,
  slidesPerView: 'auto',
//   initialSlide: 3,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,                      
    depth: 200,                     
    stretch: 60,                    
    slideShadows: false,            
},
autoplay: isMobile ? false : {
    delay: 5000,
    disableOnInteraction: false,
  },
breakpoints:{
    0: {
        slidesPerView: 1,
    },
    320:{
        slidesPerView: 2,
    },
    996:{
        slidesPerView: 3,
    }

}
});

//Nuages

const bigcloud = document.getElementById('bigcloud');
const littlecloud = document.getElementById('littlecloud');
const maxPosition= 900;

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    let newPosition = (scrollPercentage * 15) - 100; // Adjust the multiplication factor as needed
    newPosition = Math.min(newPosition, maxPosition);
    bigcloud.style.left = newPosition + 'px';
    littlecloud.style.left = newPosition - 100 + 'px';
});

//Menu

const menuToggleHamburger = document.querySelector('.hamburger');
const fullscreenMenu = document.querySelector('.fullscreen-menu');
const menuToggleClosed = document.querySelector('.closed');
const menuLis = document.querySelectorAll('li');

document.addEventListener('DOMContentLoaded', function () {


    menuToggleHamburger.addEventListener('click', function () {
        fullscreenMenu.classList.add('active');
        fullscreenMenu.classList.remove('inactive');
        menuToggleHamburger.classList.remove('hamburger');
        menuToggleClosed.classList.remove('inactive');
    });

    menuToggleClosed.addEventListener('click', function(){
        fullscreenMenu.classList.add('inactive');
        fullscreenMenu.classList.remove('active');
        menuToggleHamburger.classList.add('hamburger');
        menuToggleClosed.classList.add('inactive');
    });

});


function menuLiF() {
    fullscreenMenu.classList.add('inactive');
    fullscreenMenu.classList.remove('active');
    menuToggleHamburger.classList.add('hamburger');
    menuToggleClosed.classList.add('inactive');
}


menuLis.forEach(
    menuLi => {menuLi.addEventListener('click', menuLiF)}
)


