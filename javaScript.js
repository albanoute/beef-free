const MenuButton = document.querySelector('.Menu');
const MenuElements = document.querySelector('.nav');
const Nav = document.querySelector('nav');
const body = document.querySelector('body');

MenuButton.addEventListener('click', () => {
    Nav.classList.toggle('AttributeMenu')
    if (MenuElements.style.visibility === "visible"){

        MenuButton.style.position = 'relative'
        MenuElements.style.visibility = "hidden"
        MenuElements.style.display = 'none'
        MenuButton.textContent = "⬆︎"
        setTimeout(function () {
            MenuButton.textContent = "⬇︎ Menu"
        }, 500)
    }
    else {
        MenuButton.style.position = 'absolute'
        MenuButton.textContent = "⬆︎"
        setTimeout(function () {
            MenuElements.style.visibility = "visible"
            MenuElements.style.display = 'flex'
        }, 200)
    }
})

body.addEventListener('click', () => {
    if (MenuElements.style.visibility === "visible"){
        Nav.classList.toggle('AttributeMenu')
        MenuButton.style.position = 'relative'
        MenuElements.style.visibility = "hidden"
        MenuElements.style.display = 'none'
        MenuButton.textContent = "⬆︎"
        setTimeout(function () {
            MenuButton.textContent = "⬇︎ Menu"
        }, 500)
    }
})
