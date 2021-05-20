export default function addAnimationOnCards(element) {
  const options = {
    root: null,
    rootMargin: '40px',
    threshold: 0.1,
  };

  const callback = function (entries, observer) {
    const observedImg = entries[0];
    const methodName = observedImg.isIntersecting ? 'add' : 'remove';
    element.classList[methodName]('is-play');
  };

  const observer = new IntersectionObserver(callback, options);
  if (element) {
    observer.observe(element);
  }
}
