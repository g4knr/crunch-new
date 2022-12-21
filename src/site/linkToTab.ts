import { simulateEvent } from '@finsweet/ts-utils';

import { getParam } from '../utils/global';

/**
 * Function to open on the relevant tab
 */

export const linkToTab = () => {
  const tabID = getParam('tab');
  if (!tabID) return;

  const tab = document.querySelector(`#${tabID}`);
  simulateEvent(tab, 'click');
};
