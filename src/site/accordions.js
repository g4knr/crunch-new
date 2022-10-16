/**
 * Function to control all accordions
 * Any non-expert accordions will have the first item open
 * Accordions are toggled on header click
 */

export const accordions = () => {
  const accordionGroups = [...document.querySelectorAll('.accordions')];
  if (accordionGroups.length === 0) return;

  accordionGroups.forEach((group) => {
    if (group.classList.contains('is--experts')) return;
    group.firstElementChild.classList.add('is--active');
  });

  const accordionHeaders = [...document.querySelectorAll('.accordion__header')];
  accordionHeaders.forEach((header) => {
    header.onclick = () => {
      const accordionGroup = header.closest('.accordions');
      const active = accordionGroup.querySelector('.is--active');
      const accordion = header.closest('.accordion__item');
      if (active && active !== accordion) active.classList.remove('is--active');
      accordion.classList.toggle('is--active');
    };
  });
};
