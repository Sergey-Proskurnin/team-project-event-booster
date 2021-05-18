const signInBtnRef = document.querySelector('.sign-in-button');
const authContaineRef = document.querySelector('.auth-container');

signInBtnRef.addEventListener('click', openAuthContainer);

function openAuthContainer() {
  authContaineRef.classList.toggle('clicked');
  signInBtnRef.textContent = 'Sign in';

  if (authContaineRef.classList.contains('clicked')) {
    signInBtnRef.textContent = 'Close';
  }
}
