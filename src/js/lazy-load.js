/**Check if lazyloading supported*/
// if ('loading' in HTMLImageElement.prototype) {
//   console.log('Браузер поддерживает lazyload');
//   addSrcAttrToLazyImages();
// } else {
//   console.log('Браузер НЕ поддерживает lazyload');
//   addLazySizesScript();
// }
// function addSrcAttrToLazyImages() {
//   const lazyImages = document.querySelectorAll('img[loading="lazy"]');

//   lazyImages.forEach(img => {
//     img.src = img.dataset.src;
//   });
// }
// function addLazySizesScript() {
//   const script = document.createElement('script');
//   script.src =
//     'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js';
//   script.integrity =
//     'sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==';
//   script.crossOrigin = 'anonymous';

//   document.body.appendChild(script);
// }
