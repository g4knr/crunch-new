/**
 * Function to init the splide slider of member quotes
 * @param {Array} sliders - list of splide elements to init
 */

export const memberQuotes = () => {
  const sliders = [...document.querySelectorAll('.splide')];
  sliders.forEach((slider) => {
    new Splide(slider, {
      perPage: 3,
      perMove: 1,
      focus: 'center',
      type: 'loop',
      gap: '4em',
      arrows: false,
      speed: 350,
      dragAngleThreshold: 30,
      rewindSpeed: 700,
      breakpoints: {
        991: { perPage: 2 },
        767: { perPage: 1 },
      },
    }).mount();
  });
};
