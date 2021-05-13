import 'basiclightbox/dist/basiclightbox.min.css';
// import * as basicLightbox from 'basiclightbox';
const basicLightbox = require('basiclightbox');
import evtModalTmpl from '../templates/evtModal.hbs';
import evtModalInfo from '../templates/evtModalInfo.hbs'
import { fetchResult } from '../index'
import { onLoadMoreModalBtn } from '../index'
console.log(onLoadMoreModalBtn);
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
      document.body.style.overflow = 'hidden';
     }, 
     onClose: (modal) => {
      document.body.style.overflow = 'auto';
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

     infoTextToggle() 
     onLoadMoreModalBtn()
     document.querySelector('.btn.next').addEventListener('click', slideNext)  
     document.querySelector('.btn.prev').addEventListener('click', slidePrev)
     
   
 }
}

function infoTextToggle() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  if (document.contains(dots)) {
    dots.addEventListener('click', displayMore)
  }
 

  function displayMore () {if
     (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
   

  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    const lessBtn = document.getElementById("less")
    lessBtn.addEventListener('click', displayLess)
  }}

 function displayLess () {
  dots.style.display = "inline";
  moreText.style.display = "none";
 }

}






function slideNext (e) {
  // document.querySelector('.btn.next').addEventListener('click', slideNext)
  // const nextBtn = document.querySelector('.btn.next')
  //     nextBtn.addEventListener('click', slideNext)
  const id = document.querySelector('.evt-wrapper').id
  const evt= fetchResult.find(evt=>evt.id===id)
  const evtIndex= fetchResult.indexOf(evt)
  let evtInfoMarkup = evtModalInfo(fetchResult[evtIndex+1])
  if (evtIndex === fetchResult.length-1) {
   evtInfoMarkup = evtModalInfo(fetchResult[0])
  }

 
  
  document.querySelector('.wrapper').innerHTML = evtInfoMarkup 
  document.querySelector('.btn.next').addEventListener('click', slideNext)  
  document.querySelector('.btn.prev').addEventListener('click', slidePrev)
}

function slidePrev (e) {
  // 
  // const prevBtn = document.querySelector('.btn.prev')
  //     prevBtn.addEventListener('click', slidePrev)
  const id = document.querySelector('.evt-wrapper').id
  const evt= fetchResult.find(evt=>evt.id===id)
  const evtIndex= fetchResult.indexOf(evt)
  
  let evtInfoMarkup = evtModalInfo(fetchResult[evtIndex-1])
  if (evtIndex === 0) {
   evtInfoMarkup = evtModalInfo(fetchResult[fetchResult.length-1])
  }

  
  document.querySelector('.wrapper').innerHTML = evtInfoMarkup 
  document.querySelector('.btn.next').addEventListener('click', slideNext)  
     document.querySelector('.btn.prev').addEventListener('click', slidePrev)
   
}