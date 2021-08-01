import createTemplate from "./template/template.hbs"
import menu from "./data/menu.json"

const refs = {
    menu: document.querySelector(".js-menu"),
    input: document.querySelector("#theme-switch-toggle"),
    body: document.body,
}

// const markUp = createMenu()
// function createMenu() {
//     return menu.map(createTemplate).join('')
// }

refs.menu.innerHTML = createTemplate(menu)
refs.input.addEventListener("change", onChangeTheme)

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onChangeTheme(e) {
    if (!e.target.checked) {
        refs.body.classList.add(Theme.LIGHT)
        refs.body.classList.remove(Theme.DARK)
        localStorage.setItem('theme')
        return;
    }
    refs.body.classList.add(Theme.DARK)
    refs.body.classList.remove(Theme.LIGHT)
}