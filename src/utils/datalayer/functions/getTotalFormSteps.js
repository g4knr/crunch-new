/**
 * returns the total number of steps in a form
 * @param {element} form
 */

export const getTotalFormSteps = (form) => {
  let formSteps = form.querySelectorAll(crunchDefs.selectors.formStep);
  let totalSteps = formSteps.length > 0 ? formSteps.length : 1;
  return totalSteps;
};
