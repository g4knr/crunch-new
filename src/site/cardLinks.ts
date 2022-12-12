/**
 * Function to set the destination of article links
 */

export const cardLinks = () => {
  const cardLinks = [...document.querySelectorAll('.card__link')];
  if (!cardLinks || cardLinks.length === 0) return;
  cardLinks.forEach((link) => {
    if (!link) return;
    const cardLink = link.textContent;
    const siblingLinks = [...link.closest('.card').querySelectorAll('a')];
    siblingLinks.forEach((siblingLink) => {
      if (siblingLink.getAttribute('href') === '#' || siblingLink.getAttribute('href') === '') {
        siblingLink.setAttribute('href', cardLink);
      }
    });
  });
};
