const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const sidebar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll("[data-nav-link]");

navTogglers.forEach(btn => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
});
