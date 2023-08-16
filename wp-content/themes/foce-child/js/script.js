// Fade-in pour chaque section
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('fade-in-section')
            return;
            }
    });        
    });

observer.observe(document.querySelector('.banner'));
observer.observe(document.querySelector('.story'));
observer.observe(document.querySelector('#studio'));


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
            observerTitle.unobserve(entry.target); // Utilisez observerTitle ici
        }
    });
}, observertitlesOptions);

spans.forEach(span => {
  observerTitle.observe(span);
});


//Accélaration des fleurs au scroll
//Problème : pas de class sur pseudo-éléments

// const flowerRotation = document.querySelector(".flower-rotation");
// window.addEventListener('scroll', () => {
//     flowerRotation.style.animationDuration = `5ms`;
// })


//Parallaxe vidéo

const video = document.getElementById('background-video');
const banner = document.querySelector('.banner');

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const offset = scrollValue * 0.1;
    
    banner.style.height = video.clientHeight + 'px';

    video.style.transform = `translateY(-${offset}px)`;
});

window.dispatchEvent(new Event('scroll'));

//Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  initialSlide: 3,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,                      
    depth: 200,                     
    stretch: 60,                    
    slideShadows: false,            
},
autoplay: {
    delay: 900,
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

    menuToggle.addEventListener('click', function () {
        fullscreenMenu.classList.add('active');
        fullscreenMenu.classList.remove('inactive');
        menuToggleHamburger.classList.add('menu-toggle-active');
        menuToggleHamburger.classList.remove('hamburger');
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggleActive = document.querySelector('.menu-toggle-active');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');

    menuToggleActive.addEventListener('click', function () {
        fullscreenMenu.classList.remove('active');
        fullscreenMenu.classList.add('inactive');
        menuToggleActive.classList.remove('menu-toggle-active');
        menuToggleActive.classList.add('hamburger');
    });
});


