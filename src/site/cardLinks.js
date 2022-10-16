/**
 * Function to set the destination of article links
 */

export const cardLinks = () => {
  const cardLinks = [...document.querySelectorAll('.card__link')];
  cardLinks.forEach((link) => {
    let cardLink = link.textContent;
    let siblingLinks = [...link.closest('.card').querySelectorAll('a')];
    siblingLinks.forEach((siblingLink) => {
      if (siblingLink.getAttribute('href') === '#' || siblingLink.getAttribute('href') === '') {
        siblingLink.setAttribute('href', cardLink);
      }
    });
  });
};
