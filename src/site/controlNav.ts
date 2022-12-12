import { getCurrentBreakpoint } from '@finsweet/ts-utils';

/**
 * Function to resize the nav menu based on breakpoint
 */

export const controlNav = () => {
  const navMenu = document.querySelector('.nav__menu');
  const setMenuHeight = () => {
    navMenu.style.height = `${window.innerHeight}px`;
    navMenu.style.minHeight = `${window.innerHeight}px`;
  };

  const resetMenuHeight = () => {
    navMenu.style.removeProperty('height');
    navMenu.style.removeProperty('min-height');
  };

  const controlMenuHeight = () => {
    if (getCurrentBreakpoint() === 'main') {
      resetMenuHeight();
      window.removeEventListener('scroll', setMenuHeight);
    } else {
      setMenuHeight();
      window.addEventListener('scroll', setMenuHeight);
    }
  };

  controlMenuHeight();
  window.addEventListener('resize', controlMenuHeight);
};
