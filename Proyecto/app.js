// Seleccionar elementos
const iconoMenu = document.querySelector("#icono-menu");
const menu = document.querySelector("#menu");
const closeModal = document.querySelector("#close-modal");

// Evento de clic en el ícono del menú
iconoMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Evento para abrir el modal de Dulces Típicos
dulcesLink.addEventListener("click", (e) => {
    e.preventDefault(); // Evitar comportamiento por defecto
    dulcesModal.classList.add("active");
});

// Evento para cerrar el modal
closeModal.addEventListener("click", () => {
    dulcesModal.classList.remove("active");
});

document.body.style.backgroundImage = "URL('https://sic.cultura.gob.mx/images/134399')";