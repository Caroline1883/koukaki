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