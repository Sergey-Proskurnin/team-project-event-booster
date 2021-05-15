import 'basiclightbox/dist/basiclightbox.min.css';
const basicLightbox = require('basiclightbox');
import evtModalTmpl from '../templates/evtModal.hbs';
import evtModalInfo from '../templates/evtModalInfo.hbs';
import { getData } from './pagination';
import { eventCardRef } from './refs';

eventCardRef.addEventListener('click', onCardClick);

function onCardClick(e) {
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  if (
    e.target.classList.contains('event-image') ||
    e.target.classList.contains('event-title')
  ) {
    const id = e.target.parentNode.id;

    // console.log('i need this id', id);

    const evtInfo = fetchResult.find(evt => evt.id === id);
    //  console.log(evtInfo);
    const evtInfoMarkup = evtModalTmpl(evtInfo);
    openModal(evtInfoMarkup);
    infoTextToggle();
    onLoadMoreModalBtn();
    document.querySelector('.btn.next').addEventListener('click', slideNext);
    document.querySelector('.btn.prev').addEventListener('click', slidePrev);
  }
}

function openModal(markupInfo) {
  const modal = basicLightbox.create(`${markupInfo}`, {
    onShow: modal => {
      document.body.style.overflow = 'hidden';
      modal.element().querySelector('.close-modal').onclick = modal.close;
    },
    onClose: modal => {
      document.body.style.overflow = 'auto';
    },
  });
  modal.show();
  document.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
      modal.close();
    }
  });
}

function infoTextToggle() {
  const dots = document.getElementById('dots');
  const moreText = document.getElementById('more');
  if (document.contains(dots)) {
    dots.addEventListener('click', displayMore);
  }

  function displayMore() {
    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      moreText.style.display = 'inline';
      const lessBtn = document.getElementById('less');
      lessBtn.addEventListener('click', displayLess);
    }
  }

  function displayLess() {
    dots.style.display = 'inline';
    moreText.style.display = 'none';
  }
}

function slideNext() {
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  const id = document.querySelector('.evt-wrapper').id;
  const evt = fetchResult.find(evt => evt.id === id);
  const evtIndex = fetchResult.indexOf(evt);
  let evtInfoMarkup = evtModalInfo(fetchResult[evtIndex + 1]);
  if (evtIndex === fetchResult.length - 1) {
    evtInfoMarkup = evtModalInfo(fetchResult[0]);
  }
  document.querySelector('.wrapper').innerHTML = evtInfoMarkup;
  document.querySelector('.btn.next').addEventListener('click', slideNext);
  document.querySelector('.btn.prev').addEventListener('click', slidePrev);
  onLoadMoreModalBtn();
  infoTextToggle();
}

function slidePrev() {
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  const id = document.querySelector('.evt-wrapper').id;
  const evt = fetchResult.find(evt => evt.id === id);
  const evtIndex = fetchResult.indexOf(evt);
  let evtInfoMarkup = evtModalInfo(fetchResult[evtIndex - 1]);

  if (evtIndex === 0) {
    evtInfoMarkup = evtModalInfo(fetchResult[fetchResult.length - 1]);
  }

  document.querySelector('.wrapper').innerHTML = evtInfoMarkup;
  document.querySelector('.btn.next').addEventListener('click', slideNext);
  document.querySelector('.btn.prev').addEventListener('click', slidePrev);
  onLoadMoreModalBtn();
  infoTextToggle();
}

function onLoadMoreModalBtn() {
  const loadMoreBtn = document.querySelector('.more-info');
  if (document.contains(loadMoreBtn)) {
    loadMoreBtn.addEventListener('click', showMore);
  }
}

function showMore(e) {
  e.preventDefault();
  let fetchResult = JSON.parse(localStorage.getItem('data'));
  const modal = document.querySelector('.basicLightbox');
  modal.remove();
  document.body.style.overflow = 'auto';
  const id = e.target.parentNode.id;
  const valueInput = fetchResult.find(e => e.id === id).name;
  getData(' ', valueInput);
}
