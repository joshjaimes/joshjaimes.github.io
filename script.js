
const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    links.classList.toggle("open");
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
