import './style.scss';
import BurgerMenu from './components/header/burgerMenu';
import StickyHeader from './components/header/stickyHeader';

document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu('.header__burger-button', '.header');
  new StickyHeader('.header');
});
