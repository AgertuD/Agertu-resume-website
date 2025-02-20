document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you for your message! We'll be intouch.");
    });
  }

  // Responsive Navigation Menu
  const nav = document.querySelector("#menu");
  const toggle = document.querySelector("#menu-toggle");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

  // Active Navigation Link Highlight
  let navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    let linkPath = new URL(link.href, window.location.origin).pathname;
    let currentPath = window.location.pathname;

    if (
      linkPath === currentPath ||
      (link.getAttribute("href") === "index.html" && currentPath === "/")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Dark Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const applyDarkMode = () => {
    document.body.classList.add("dark-mode");
    document
      .querySelectorAll("section, nav, footer, .project-card")
      .forEach((el) => {
        el.classList.add("dark-mode");
      });
  };

  const removeDarkMode = () => {
    document.body.classList.remove("dark-mode");
    document
      .querySelectorAll("section, nav, footer, .project-card")
      .forEach((el) => {
        el.classList.remove("dark-mode");
      });
  };

  // Check localStorage and apply dark mode if previously enabled
  if (localStorage.getItem("dark-mode") === "enabled") {
    applyDarkMode();
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      if (document.body.classList.contains("dark-mode")) {
        removeDarkMode();
        localStorage.setItem("dark-mode", "disabled");
      } else {
        applyDarkMode();
        localStorage.setItem("dark-mode", "enabled");
      }
    });
  }
});
