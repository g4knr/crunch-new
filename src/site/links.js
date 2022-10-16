/**
 * Function to set all external links to noopener
 */

export const links = () => {
  const links = [...document.querySelectorAll('a')];
  links.forEach((link) => {
    if (location.hostname !== link.hostname || !link.hostname.length) {
      link.setAttribute('rel', 'noopener');
    }
  });
};
