import 'basiclightbox/dist/basiclightbox.min.css';
// import * as basicLightbox from 'basiclightbox';
const basicLightbox = require('basiclightbox');
import evtModalTmpl from '../templates/evtModal.hbs';
import evtModalInfo from '../templates/evtModalInfo.hbs';
// import { fetchResult } from '../index'
import { onLoadMoreModalBtn } from '../index';
console.log(onLoadMoreModalBtn);
// import * as A from '../index'

// const api = new ApiService;
// console.log(api);

// import {api} from '../index'
// console.log(api);

// let a = new api
// console.log(a);

const eventCardRef = document.querySelector('.event-cards');


eventCardRef.addEventListener('click', onCardClick)

function onCardClick (e) {
 
 if (e.target.classList.contains("event-image")||e.target.classList.contains("event-title")) {
  const id = e.target.parentNode.id
  
  const evtInfo = fetchResult.find(evt=>evt.id===id)
  const evtInfoMarkup = evtModalTmpl(evtInfo)

     openModal(evtInfoMarkup)
     infoTextToggle() 
     onLoadMoreModalBtn()
     document.querySelector('.btn.next').addEventListener('click', slideNext)  
     document.querySelector('.btn.prev').addEventListener('click', slidePrev)
    
 }

}


function openModal (markupInfo) {
  const modal = basicLightbox.create(`${markupInfo}`, {
    onShow: (modal) => {
     document.body.style.overflow = 'hidden';
     modal.element().querySelector('.close-modal').onclick = modal.close;
     
    }, 
    onClose: (modal) => {
     document.body.style.overflow = 'auto';
    }

  })
  modal.show()

  document.addEventListener('keyup', event => {
       if (event.key === 'Escape') {
         modal.close()
       }
     });
}


function infoTextToggle() {
  const dots = document.getElementById('dots');
  const moreText = document.getElementById('more');
  if (document.contains(dots)) {
    dots.addEventListener('click', displayMore);
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

function slideNext () {
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
  onLoadMoreModalBtn()
}

function slidePrev () {
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
  onLoadMoreModalBtn()

}

