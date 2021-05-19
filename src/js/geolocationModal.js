// // import refs from './refs';
// import { Loader } from "@googlemaps/js-api-loader"

// // const geoModal = document.querySelector('.js-geolocation-modal');
// // const geoModalBackdrop = document.querySelector('.js-geolocation-backdrop');

// let map;
// let marker;
// const onLocationOnCardClick = e => {
//   if (!e.target.classList.contains('js-geolocation-btn')) {
//     return
//   }
// const loader = new Loader({
//   apiKey: "AIzaSyC2LapXJkglr9CJpAo3W8DHmsnivv69nDQ",
// });
// loader.load().then(() => {
//   const latLng = {
//     lat: +e.target.dataset.latitude,
//     lng: +e.target.dataset.longitude
//   }
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: latLng,
//     zoom: 15,
//   });
//   marker = new google.maps.Marker({
//     position: latLng,
//     title:"Start!!!"
//   });
//   marker.setMap(map);
// });
//   geoModalBackdrop.classList.remove('is-hidden')
// }


// const onGeoModalClick = e => {
 
//   if (e.target.classList.contains('js-geolocation-backdrop')) {
   
//     geoModalBackdrop.classList.add('is-hidden')
//   } else {
//     return
//   }
// }
// const onCloseGeoModalByEscKeydown = e => {
// if (e.code === 'Escape') {
//      geoModalBackdrop.classList.add('is-hidden')
//   }
// }


// window.addEventListener('keydown', onCloseGeoModalByEscKeydown);
// geoModalBackdrop.addEventListener('click', onGeoModalClick);
// gallery.addEventListener('click', onLocationOnCardClick  )