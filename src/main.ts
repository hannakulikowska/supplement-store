import './style.scss';

import BurgerMenu from './components/header/burgerMenu';
import StickyHeader from './components/header/stickyHeader';
import ScrollerAnimation from './components/slider/slider';

document.addEventListener('DOMContentLoaded', () => {
  new BurgerMenu('.header__burger-button', '.header');
  new StickyHeader('.header');
  new ScrollerAnimation('.brands__slider');
});
