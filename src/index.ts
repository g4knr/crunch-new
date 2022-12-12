import * as forms from './forms';
import * as site from './site';
import * as dataLayer from './utils/datalayer';
import * as global from './utils/global';

window.Webflow ||= [];
window.Webflow.push(() => {
  const CRUNCH = (() => {
    global.log('index.ts');
    window.dataLayer = window.dataLayer || [];

    /**
     * DataLayer
     */

    dataLayer.pageLoad();
    const links = [...document.querySelectorAll('a')];
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        global.debug(event);
        dataLayer.ctaClicks(link);
        dataLayer.knowledgeLinkClick(link);
        dataLayer.accordionExpand(link);
      });
    });

    site.accordions();
    site.cardLinks();
    site.controlNav();

    const countdownTimers = [...document.querySelectorAll('[data-countdown="wrapper"]')];
    countdownTimers.forEach((timer) => {
      site.countdownTimer(timer);
    });

    site.fab();
    site.links();
    site.linkToTab();

    const memberQuotesSlider = document.querySelector('.splide');
    if (memberQuotesSlider) {
      global.createElement('link', document.head, {
        href: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css',
        rel: 'stylesheet',
      });
      global.createElement('style', document.head, {
        text: '.splide__pagination__page{background:#BFC6CB!important;width:10px;height:10px}.splide__pagination__page.is-active{background:#FC125E!important;transform:scale(1)}',
      });
      global.createElement('script', document.body, {
        src: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js',
        callback: site.memberQuotes,
      });
    }

    const modalToggles = [
      {
        selector: '.is--callback',
        formSelector: '.modal__wrapper.is--main form',
      },
      {
        selector: '.is--sub-callback',
        formSelector: '.modal__wrapper.is--sub form',
      },
      {
        selector: '.is--footer-callback',
        formSelector: '.modal__wrapper.is--footer form',
      },
      {
        selector: '.modal__close',
      },
      {
        selector: '.modal__x',
      },
    ];

    modalToggles.forEach((item) => {
      const toggles = [...document.querySelectorAll(item.selector)];
      toggles.forEach((toggle) => {
        toggle.onclick = () => {
          const isScrollable = global.toggleScroll();
          if (isScrollable) return;

          const form = document.querySelector(item.formSelector);
          const formStep = dataLayer.functions.getCurrentFormStep(form);
          dataLayer.formStepLoad(form, formStep);
        };
      });
    });

    forms.main();
    forms.newsletter();
  })();
});
