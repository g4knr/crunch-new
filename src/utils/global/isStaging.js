/**
 * Defines whether this is running on the staging domain
 * @returns true if on the staging domain
 */

export const isStaging = () => {
  return window.location.origin.includes('webflow.io');
};
