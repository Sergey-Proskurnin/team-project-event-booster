import 'basiclightbox/dist/basiclightbox.min.css';
import * as basicLightbox from 'basiclightbox';

const eventCardRef = document.querySelector('.event-cards');

function onOpenModal(e) {
  let modalCloseEsc = '';
  let modalCloseBtn = '';
  const instance = basicLightbox.create(
    ` <div class="event-modal">
        <button class="close-modal" type="button">
          <span class="material-icons">close</span>
        </button>
        <picture>
          <source srcset="" media="(min-width: 320px)" />
          <img src="" alt="small event poster" class="title-img" />
        </picture>
        <div class="info-event">
          <picture>
            <source srcset="" media="(min-width: 320px)" />
            <img src="" alt="big event poster" class="poster-img" />
          </picture>
        
          <ul class="event-data">
            <li class="info">
              <h2 class="info modal-title">info</h2>
              <p class="info-text"></p>
            </li>
            <li class="date">
              <h2 class="date modal-title">when</h2>
              <p class="date-text"></p>
              <p class="time-text"></p>
            </li>
            <li class="place">
              <h2 class="place modal-title">where</h2>
              <p class="city-text"></p>
              <p class="place-text"></p>
            </li>
            <li class="artist">
              <h2 class="artist modal-title">who</h2>
              <p class="artist-text"></p>
            </li>
            <li class="prices">
              <h2 class="prices modal-title">prices</h2>
              <p class="stprice-text"></p>
              <a
                href=""
                class="st ticket"
                rel="noopener noreferrer"
                target="_blank"
                >buy tickets</a
              >
              <p class="vipprice-text"></p>
              <a
                href=""
                class="vip ticket"
                rel="noopener noreferrer"
                target="_blank"
                >buy tickets</a
              >
            </li>
          </ul>
        </div>`,
    {
      onClose: () => {
        document.body.classList.remove('is-open');
      },
    },
  );

  instance.show(document.body.classList.add('is-open'));

  const closeBtn = document.querySelector('.close-modal .material-icons');

  modalCloseBtn = window.addEventListener('click', event => {
    if (event.target === closeBtn) {
      instance.close();
    }
  });

  modalCloseEsc = window.addEventListener('keyup', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });

  window.removeEventListener('click', modalCloseBtn);
  window.removeEventListener('keyup', modalCloseEsc);
}
eventCardRef.addEventListener('click', event => {
  onOpenModal(event);
});
