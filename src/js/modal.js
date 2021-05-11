import 'basiclightbox/dist/basiclightbox.min.css';
// import * as basicLightbox from 'basiclightbox';
const basicLightbox = require('basiclightbox');
import evtModalTmpl from '../templates/evtModal.hbs';
import { fetchResult } from '../index'


const eventCardRef = document.querySelector('.event-cards');

// function onOpenModal(e) {
//   let modalCloseEsc = '';
//   let modalCloseBtn = '';

 
//   const instance = basicLightbox.create(
//     `${evtInfoMarkup}`,
//     {
//       onClose: () => {
//         document.body.classList.remove('is-open');
//       },
//     },
//   );

//   instance.show();
//   document.body.classList.add('is-open')
//   const closeBtn = document.querySelector('.close-modal .material-icons');

//   modalCloseBtn = window.addEventListener('click', event => {
//     if (event.target === closeBtn) {
//       instance.close();
//     }
//   });

//   modalCloseEsc = window.addEventListener('keyup', event => {
//     if (event.key === 'Escape') {
//       instance.close();
//     }
//   });

//   window.removeEventListener('click', modalCloseBtn);
//   window.removeEventListener('keyup', modalCloseEsc);
// }
eventCardRef.addEventListener('click', openModal)

// event => {
//   onOpenModal(event);
// });

function openModal (e) {
  console.log(fetchResult);
  const id = e.target.parentNode.id
  console.log(id);
  const evtInfo = fetchResult.find(evt=>evt.id===id)
  
  console.log(evtInfo);
 
   const evtInfoMarkup = evtModalTmpl(evtInfo)

  const modal = basicLightbox.create(`${evtInfoMarkup}`)
     modal.show()

  const closeBtn = document.querySelector('.close-modal .material-icons');
  console.log(closeBtn);
  // const modalCloseBtn = 
document.addEventListener('click', event => {
  console.log(event);
        if (event.target === closeBtn) {
          console.log(event.target);
          modal.close()
          // instance.close();
        }
      });
    
    //  const modalCloseEsc = window.addEventListener('keyup', event => {
    //     if (event.key === 'Escape') {
    //       instance.close();
    //     }
    //   });
    
}