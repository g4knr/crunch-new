/**
 * Function to toggle the fab
 */

export const fab = () => {
  const fabWrapper = document.querySelector('.fab__wrapper');
  const fabToggles = [...document.querySelectorAll('.fab, .fab__close, .fab__item')];
  fabToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      fabWrapper.classList.toggle('is--open');
    });
  });
};
