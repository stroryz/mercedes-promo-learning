const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    btns.forEach((btnItem, i) => {
      if (btnItem === btn) {
        btnItem.classList.toggle('feature__link_active');
        lists[i].classList.toggle('hidden');
      } else {
        btnItem.classList.remove('feature__link_active');
        lists[i].classList.add('hidden');
      }
    })
  })
})