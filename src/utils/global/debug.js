import { getParam } from './getParam';

/**
 * Prevents the default behaviour if the 'debug' param is present
 * @param {object} event - the default event object
 */

export const debug = (event) => {
  const debug = getParam('debug');
  if (!debug) return;
  event.preventDefault();
};
