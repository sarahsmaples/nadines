// Hero image carousel
const slides = document.querySelectorAll(".hero-slide");
if (slides.length > 1) {
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove("opacity-100");
    slides[current].classList.add("opacity-0");
    current = (current + 1) % slides.length;
    slides[current].classList.remove("opacity-0");
    slides[current].classList.add("opacity-100");
  }, 4000);
}

// Mobile nav toggle
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    mainNav.classList.toggle("hidden");
  });
}
