import 'basiclightbox/dist/basiclightbox.min.css';
// import * as basicLightbox from 'basiclightbox';
const basicLightbox = require('basiclightbox');
import evtModalTmpl from '../templates/evtModal.hbs';
import { fetchResult } from '../index'
// import * as A from '../index'

// const api = new ApiService;
// console.log(api);

// import {api} from '../index'
// console.log(api);

// let a = new api
// console.log(a);

const eventCardRef = document.querySelector('.event-cards');

eventCardRef.addEventListener('click', openModal)

// event => {
//   onOpenModal(event);
// });

function openModal (e) {
 
 if (e.target.classList.contains("event-image")||e.target.classList.contains("event-title")) {
  const id = e.target.parentNode.id
  
  const evtInfo = fetchResult.find(evt=>evt.id===id)
  const evtInfoMarkup = evtModalTmpl(evtInfo)

   const modal = basicLightbox.create(`${evtInfoMarkup}`, {
     onShow: (modal) => {
      document.body.style.position = 'fixed';
     }, 
     onClose: (modal) => {
      document.body.style.position = 'relative';
     }

   })
     modal.show()

  const closeBtn = document.querySelector('.close-modal .material-icons');
   document.addEventListener('click', event => {
          if (event.target === closeBtn) {
           modal.close()
        }
      });
    document.addEventListener('keyup', event => {
        if (event.key === 'Escape') {
          modal.close()
        }
      });

      // const nextBtn = document.querySelector('.btn.next')
      // nextBtn.addEventListener('click', slideNext)
   
 }
}


// function slideNext (e) {
  
//   const id = e.target.parentNode.id
//   const evt= fetchResult.find(evt=>evt.id===id)
//   const evtIndex= fetchResult.indexOf(evt)
//   const evtInfoMarkup = evtModalTmpl(fetchResult[evtIndex+1])
//   document.querySelector('.basicLightbox__placeholder').innerHTML = evtInfoMarkup
  
//   document.querySelector('.btn.next').addEventListener('click', slideNext)
// }