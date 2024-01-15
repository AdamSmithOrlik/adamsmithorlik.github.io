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

var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
  menu.classList.toggle('active');
});

// Switching page animation

// Wait for the page to load
window.addEventListener('load', function () {
    // Add an event listener to the menu links
    var links = document.querySelectorAll('.menu-link');
    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        var href = this.getAttribute('href'); // Get the target page URL
        animatePageSwitch(href); // Call the animation function
      });
    });
  });
  
  // Animation function
  function animatePageSwitch(href) {
    var content = document.querySelector('.content'); // Assuming a container element with the class "content"
    content.classList.add('fade-in'); // Apply the fade-in animation class
  
    // Wait for the animation to finish
    setTimeout(function () {
      window.location.href = href; // Redirect to the target page
    }, 500); // Adjust the duration of the animation as needed
  }