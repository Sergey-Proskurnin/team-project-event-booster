export default function addAnimationOnCards(element) {
const animationUp = document.querySelector('.event-card');

const options = {
	root: null,
	rootMargin: '20px',
	threshold: 0.1,
};

const callback = function( entries, observer ) {
  const observedImg = entries[0];
  const methodName = observedImg.isIntersecting ? 'add' : 'remove';
  // console.log(methodName);
  element.classList[methodName]('is-play');
};

const observer = new IntersectionObserver( callback, options );
if ( element ) {
	observer.observe( element );
};
};
