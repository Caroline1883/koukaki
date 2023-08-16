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
autoplay: {
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

document.addEventListener('DOMContentLoaded', function () {
    const menuToggleHamburger = document.querySelector('.hamburger');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    const menuToggleActive = document.querySelector('.menu-toggle-active');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');

    menuToggle.addEventListener('click', function () {
        fullscreenMenu.classList.add('active');
        fullscreenMenu.classList.remove('inactive');
        menuToggleHamburger.classList.add('menu-toggle-active');
        menuToggleHamburger.classList.remove('hamburger');
    });

});

document.addEventListener('DOMContentLoaded', function () {


    menuToggleActive.addEventListener('click', function () {
        fullscreenMenu.classList.remove('active');
        fullscreenMenu.classList.add('inactive');
        menuToggleActive.classList.remove('menu-toggle-active');
        menuToggleActive.classList.add('hamburger');
    });
});


