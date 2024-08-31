const burger = document.querySelector('.header__menu-toggle');
const menu = document.querySelector('.header__nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('header__menu-toggle--active');
  menu.classList.toggle('header__nav--shown');
});
