const navBar = document.querySelector(".navigation")

const menuButton = document.querySelector(".menu-button")

const closeButton = document.querySelector(".close-button")

menuButton.addEventListener("click", () => {
    navBar.classList.toggle('show-menu')
});

closeButton.addEventListener("click", () => {
    navBar.classList.toggle('show-menu')
});
