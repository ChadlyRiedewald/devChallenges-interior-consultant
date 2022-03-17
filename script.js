const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger--active');
  hamburger.classList.toggle('hamburger');
  menu.classList.toggle('menu--active');
});

document.querySelectorAll('.menu__link').forEach(n =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('hamburger--active');
    hamburger.classList.toggle('hamburger');
    menu.classList.remove('menu--active');
  })
);
