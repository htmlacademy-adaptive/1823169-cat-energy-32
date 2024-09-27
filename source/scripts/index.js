const header = document.querySelector('.header');
const burger = document.querySelector('.header__menu-toggle');
const menu = document.querySelector('.header__nav');
const lines = document.querySelectorAll('.line');

header.classList.remove('header--without-js-mobile');
burger.classList.remove('header__menu-toggle--without-js-mobile');
menu.classList.remove('header__nav--without-js-mobile');

burger.addEventListener('click', () => {
  burger.classList.toggle('header__menu-toggle--active');
  lines.forEach((line) => line.classList.toggle('line--active'));
  menu.classList.toggle('header__nav--shown');
});
