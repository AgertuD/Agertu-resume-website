document.addEventListener("DOMContentLoaded", function () {
  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
      alert("Thank you for your message! We'll be in touch."); // Show thank you message
    });
  }

  // Responsive Navigation Menu Toggle
  const nav = document.querySelector("#menu");
  const toggle = document.querySelector("#menu-toggle");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("active"); // Toggle the 'active' class to show/hide the menu
    });
  }

  // Active Navigation Link Highlight
  let navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    let linkPath = new URL(link.href, window.location.origin).pathname;
    let currentPath = window.location.pathname;

    // Check if the link matches the current page path
    if (
      linkPath === currentPath ||
      (link.getAttribute("href") === "index.html" && currentPath === "/")
    ) {
      link.classList.add("active"); // Highlight the active link
    } else {
      link.classList.remove("active"); // Remove active class from other links
    }
  });

  // Dark Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");

  // Apply dark mode styles
  const applyDarkMode = () => {
    document.body.classList.add("dark-mode"); // Apply dark mode to the body
    document
      .querySelectorAll("section, nav, footer, .project-card")
      .forEach((el) => {
        el.classList.add("dark-mode"); // Apply dark mode to other sections
      });
  };

  // Remove dark mode styles
  const removeDarkMode = () => {
    document.body.classList.remove("dark-mode"); // Remove dark mode from the body
    document
      .querySelectorAll("section, nav, footer, .project-card")
      .forEach((el) => {
        el.classList.remove("dark-mode"); // Remove dark mode from other sections
      });
  };

  // Check localStorage and apply dark mode if previously enabled
  if (localStorage.getItem("dark-mode") === "enabled") {
    applyDarkMode(); // Apply dark mode if stored in localStorage
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      if (document.body.classList.contains("dark-mode")) {
        removeDarkMode(); // Remove dark mode if it's currently active
        localStorage.setItem("dark-mode", "disabled"); // Store the dark mode status in localStorage
      } else {
        applyDarkMode(); // Apply dark mode if it's not active
        localStorage.setItem("dark-mode", "enabled"); // Store the dark mode status in localStorage
      }
    });
  }
});
