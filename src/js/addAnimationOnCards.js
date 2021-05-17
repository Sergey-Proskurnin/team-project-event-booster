// const animationUp = document.querySelector('.event-card');
// window.addEventListener('scroll', scrollAnimtion);

//  observer = new IntersectionObserver ((entries) => {
//    if (entries[0].intersectionRatio > 0) {
//      animationUp.classList.add('.is-paused');
//    } else {
//      animationUp.classList.remove('.is-paused');
//    }
//  });


if (window.IntersectionObserver) {
  const el = document.querySelector('.event-card');
  const observer = new IntersectionObserver(intersectionObserverCallback);
  observer.observe(el);
}

function intersectionObserverCallback(entries){
    if (entries[0].intersectionRatio === undefined) {
        return;
    }
    el.classList.add('.is-paused', entries[0].intersectionRatio <= 0);
};
