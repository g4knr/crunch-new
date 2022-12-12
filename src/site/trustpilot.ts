/**
 * Function to control the trustpilot items
 * Line clamp on load
 * Toggle show more and show less
 */

export const trustpilot = () => {
  const reviews = [...document.querySelectorAll('.trustpilot__review')];
  if (!reviews || reviews.length === 0) return;

  const toggleReview = (review, more) => {
    if (!review || !more) return;
    const text = review.classList.contains('line-clamp3') ? 'Less' : 'More';
    review.classList.toggle('line-clamp3');
    more.textContent = text;
  };

  reviews.forEach((review) => {
    if (!review) return;
    const more = review?.parentElement?.querySelector('.trustpilot__more');
    if (!more) return;

    const height = review.offsetHeight;
    review.classList.add('line-clamp3');
    const newHeight = review.offsetHeight;

    if (height === newHeight) {
      more.classList.add('is--hidden');
    } else {
      more.classList.remove('is--hidden');
      more.addEventListener('click', () => {
        toggleReview(review, more);
      });
    }
  });
};
