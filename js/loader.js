const loader = document.querySelector('.loader');
const loaderPage = document.getElementById('loading-page');
const main = document.querySelector('.main');

function init() {
  // Hide the scrollbar initially
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = 'none';
      loaderPage.style.zIndex = '-9999'; // Set the z-index of the loader element to -9999
      main.style.opacity = 1; // Set the opacity of the main element to 1
      
      // Show the scrollbar after the page is loaded
      document.body.style.overflow = 'auto';
    }, 500);
  }, 2500);
}



window.addEventListener('DOMContentLoaded', init);
 