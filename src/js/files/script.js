// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//========================================================================================================================================================

// open search placed in header

const openButton = document.querySelector('.search-header__open');
const searchForm = document.querySelector('.search-header__form');
const buttonsContainer = document.querySelector('.search-header__buttons');

if (window.innerWidth > 767.98) {
    openButton.addEventListener('click', () => {
        searchForm.classList.add('search-header__form_open');
        buttonsContainer.prepend(openButton);
    })
}

