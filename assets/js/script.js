function simpleTab(index) {
  const tabs = document.querySelectorAll('.tab');
  const buttons = document.querySelectorAll('.t-btn');

  tabs.forEach((tab, i) => {
    if (i === index) {
      tab.classList.add('tab-active');
    } else {
      tab.classList.remove('tab-active');
    }
  });

  buttons.forEach((button, i) => {
    if (i === index) {
      button.classList.add('btn-active');
    } else {
      button.classList.remove('btn-active');
    }
  });
}

// Initialize the first tab as active
simpleTab(0);




// --------------------------------------------------

  // 1. Grab all buttons and panels
  const buttons = document.querySelectorAll('.button-group button');
  const panels = document.querySelectorAll('.panel');

  // 2. Add a click event to each button
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // a. Remove 'active' from all buttons
      buttons.forEach(btn => btn.classList.remove('active-btn'));
      // b. Add 'active' to the clicked button
      button.classList.add('active-btn');

      // c. Hide all panels
      panels.forEach(panel => panel.classList.remove('active'));
      
      // d. Get the target panel ID from the button
      const targetId = button.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      
      // e. Show the target panel
      targetPanel.classList.add('active');
    });
  });




  // ----------------------loader-----------------
 // Wait for the entire page to load
 window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  const content = document.querySelector('.content');
  
  // Add fade-out class to trigger CSS transition
  preloader.classList.add('fade-out');
  
  // After transition completes, hide the preloader and reveal content
  setTimeout(() => {
    preloader.style.display = 'none';
    content.classList.add('visible');
  }, 1000); // Match this timeout with the CSS transition duration
});


// ---------------------------------------img0


let img = document.getElementById("moving-img");
  let positions = [
      { top: 100, left: 100 },
      { top: 100, left: 120 },
      { top: 120, left: 120 },
      { top: 120, left: 100 }
  ];
  let index = 0;

  function moveImage() {
      img.style.top = positions[index].top + "px";
      img.style.left = positions[index].left + "px";
      index = (index + 1) % positions.length;
      setTimeout(moveImage, 500); // Change every 0.5s
  }

  moveImage();


   // Show/hide the button based on scroll position
   const backToTopButton = document.querySelector('.back-to-top');

   window.addEventListener('scroll', () => {
     if (window.pageYOffset > 300) {
       backToTopButton.classList.add('show');
     } else {
       backToTopButton.classList.remove('show');
     }
   });

   // Smooth scroll to top when button is clicked
   backToTopButton.addEventListener('click', (e) => {
     e.preventDefault();
     window.scrollTo({ top: 0, behavior: 'smooth' });
   });


  //  -----------------------------dark mood------------------------
  const themeToggleCheckbox = document.getElementById("theme-toggle-checkbox");

// On checkbox change, toggle the dark-mode class on <body>
themeToggleCheckbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});



document.addEventListener("DOMContentLoaded", function() {
  if (!document.cookie.includes("cookieConsent=true")) {
      document.getElementById("cookie-banner").style.display = "flex";
  }
  
  document.getElementById("accept-cookies").addEventListener("click", function() {
      document.cookie = "cookieConsent=true; path=/; max-age=" + 60*60*24*30;
      document.getElementById("cookie-banner").style.display = "none";
  });
});