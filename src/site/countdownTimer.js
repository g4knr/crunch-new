/**
 * Function to set and show each countdow
 * @param {element} countdown - the wrapper of the countdown items
 * This should also have the countdown end time (e.g. "Nov 01, 2022 00:00:00 GMT+01:00")
 */

export const countdownTimer = (countdown) => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const countdownEnd = new Date(countdown.getAttribute('data-countdown-end')).getTime();
  const countdownSelector = 'data-countdown-value';

  const seconds = countdown.querySelector(`[${countdownSelector}="seconds"]`),
    minutes = countdown.querySelector(`[${countdownSelector}="minutes"]`),
    hours = countdown.querySelector(`[${countdownSelector}="hours"]`),
    days = countdown.querySelector(`[${countdownSelector}="days"]`);

  const formattedNumber = (number) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };

  const updateCountdown = () => {
    let now = new Date().getTime(),
      distance = countdownEnd - now;

    days.innerText = formattedNumber(Math.floor(distance / day));
    hours.innerText = formattedNumber(Math.floor((distance % day) / hour));
    minutes.innerText = formattedNumber(Math.floor((distance % hour) / minute));
    seconds.innerText = formattedNumber(Math.floor((distance % minute) / second));
  };

  const showCountdown = () => {
    countdown.closest('[data-countdown="hide"]').style.opacity = '1';
  };

  updateCountdown();
  showCountdown();
  setInterval(updateCountdown, second);
};
