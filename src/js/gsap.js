const mouse = document.querySelector('.mouse');
const links = document.querySelectorAll('a');
const main = document.querySelector('.main');

function moveMouse(e) {
  if (e.clientX < 5 || e.clientY < 5 || e.clientY > (window.innerHeight - 5) || e.clientX > (window.innerWidth - 5)) {
    mouse.style.opacity = 0;
  } else {
    mouse.style.opacity = 1;
    mouse.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
  }
};

if (window.innerWidth >= 728) {
  document.addEventListener('mousemove', moveMouse);

  links.forEach(link => link.addEventListener('mouseover', () => { mouse.classList.add('links-visible') }));
  links.forEach(link => link.addEventListener('mouseleave', () => { mouse.classList.remove('links-visible') }));

  main.addEventListener('mouseover', () => { mouse.classList.add('view-visible') });
  main.addEventListener('mouseleave', () => { mouse.classList.remove('view-visible') });

  
}