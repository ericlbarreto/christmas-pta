const navBar = document.querySelector(".navigation")
const menuButton = document.querySelector(".menu-button")
const closeButton = document.querySelector(".close-button")
const logo = document.querySelector(".logo-theme")
const change_icon = document.querySelector(".change-theme")
const body = document.body

function toggleTheme(){
    body.classList.toggle("dark")
    if (body.classList.contains("dark")){
        change_icon.setAttribute("src", "img/bx-sun.svg")
        logo.setAttribute("src", "img/Logo-header-white.png")
        menuButton.setAttribute("src", "img/menu-white.svg")
        closeButton.setAttribute("src", "img/menu-close.svg")
    } else {
        change_icon.setAttribute("src", "img/bx-moon.svg.png")
        logo.setAttribute("src", "img/Logo header.png")
        menuButton.setAttribute("src", "img/menu-dark.svg")
        closeButton.setAttribute("src", "img/menu-close-dark.svg")
    }
    
}

menuButton.addEventListener("click", () => {
    navBar.classList.toggle('show-menu')
});

closeButton.addEventListener("click", () => {
    navBar.classList.toggle('show-menu')
});

change_icon.addEventListener("click", () =>{
    toggleTheme()
})
