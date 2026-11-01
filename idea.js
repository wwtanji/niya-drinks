const ART_SELECTOR = '.niya';
const BUTTON_SELECTOR = '[data-stir]';
const STIRRED_CLASS = 'is-stirred';
const LABEL_STIR = 'Rozmiešať';
const LABEL_SETTLE = 'Nechať vrstvy';

const art = document.querySelector(ART_SELECTOR);
const button = document.querySelector(BUTTON_SELECTOR);

button.addEventListener('click', () => {
  const stirred = art.classList.toggle(STIRRED_CLASS);
  button.setAttribute('aria-pressed', String(stirred));
  button.textContent = stirred ? LABEL_SETTLE : LABEL_STIR;
});
