
// toggle menu hamburguesa
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-hamburguesa");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-hamburguesa_visible");

// practicabilidad con teclado del menu hamburguesa
  if (navMenu.classList.contains("nav-hamburguesa_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
