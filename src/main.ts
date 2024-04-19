import './style.scss';
import BurgerMenu from './components/header/burgerMenu';
import HeaderChanger from './components/header/headerChanger';

document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu('.header__sidebar-button', '.header');
  new HeaderChanger('.header', '#target-section');
});
