/* в этот файл добавляет скрипты*/

const mainNavigation = document.querySelector('.main-nav');
const mainNavigationToggle = document.querySelector('.main-nav__toggle');

function setMenuState() {
  mainNavigationToggle.classList.toggle('main-nav__toggle--closed');
  mainNavigationToggle.classList.toggle('main-nav__toggle--opened');
}

mainNavigation.classList.remove('main-nav--no-js');
setMenuState();

mainNavigationToggle.addEventListener('click', () => {
  setMenuState();
});
