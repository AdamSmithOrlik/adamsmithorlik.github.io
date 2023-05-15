'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);

});

// Switching page animation

// Get all the links that trigger page transitions
const pageLinks = document.querySelectorAll('a[data-page-link]');

// Add click event listeners to the links
pageLinks.forEach(link => {
  link.addEventListener('click', handlePageTransition);
});

// Handle page transition
function handlePageTransition(e) {
  e.preventDefault();

  // Get the target page
  const targetPage = e.target.getAttribute('href');

  // Add the 'page-leave' class to the current page
  const currentPage = document.querySelector('.page.active');
  currentPage.classList.add('page-leave');

  // Remove the 'active' class from the current page after the animation completes
  setTimeout(() => {
    currentPage.classList.remove('active');
  }, 500);

  // Add the 'page-enter' class to the target page
  const nextPage = document.querySelector(targetPage);
  nextPage.classList.add('page-enter');

  // Add the 'active' class to the target page after a short delay
  setTimeout(() => {
    nextPage.classList.add('active');
    nextPage.classList.remove('page-enter');
  }, 10);
}