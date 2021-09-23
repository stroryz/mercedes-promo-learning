const modalBtn = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');

modalBtn.forEach(elem => {
  elem.addEventListener('click', () => {
    modalElem.classList.remove('hidden');
})
})


modalElem.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
    modalElem.classList.add('hidden');
  }
})