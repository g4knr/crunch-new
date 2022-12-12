import { simulateEvent } from '@finsweet/ts-utils';

import { getParam } from '../utils/global';

/**
 * Function to open on the relevant tab
 */

export const linkToTab = () => {
  let tabID = getParam('tab');
  if (!tabID) return;

  let tab = document.querySelector(`#${tabID}`);
  simulateEvent(tab, 'click');
};
