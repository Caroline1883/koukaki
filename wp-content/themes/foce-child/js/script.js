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

// console.log("boum");

const spans = document.querySelectorAll('span');

const observertitlesOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observerTitle = new IntersectionObserver((entries, observerTitle) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            console.log("bim");
            entry.target.classList.add('title-animation');
            observerTitle.unobserve(entry.target); // Utilisez observerTitle ici
        }
    });
}, observertitlesOptions);

spans.forEach(span => {
  observerTitle.observe(span);
});


// const observerTitle = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting){
//             entry.target.classList.add('animation-titre')
//             return;
//             }
//     });        
//     });

// observerTitle.observe(document.querySelector('h2'));
// observerTitle.observe(document.querySelector('h3'));


