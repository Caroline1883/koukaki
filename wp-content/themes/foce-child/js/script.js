console.log("bonjour")


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


//parallax

const logo = document.querySelector('.banner img');

const observerLogo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            logo.classList.add('img-relative')
            return;
            }
    });        
    });

observerLogo.observe(document.querySelector('.story h2'));

const parallax = document.querySelector('.banner');
window.addEventListener('scroll',() =>{
    parallax.style.backgroundPositionY = -window.scrollY + "px"
});




// document.addEventListener('DOMContentLoaded', (event) => {
 
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//           const titres = entry.target.querySelector("h1,h2,h3");
    
//           if (entry.isIntersecting) {
//             titres.classList.add('toAnim');
//             return; 
//           }
    
//           titres.classList.remove('toAnim');
//         });
//       });
    
//       observer.observe(document.querySelector('section'));
//     });