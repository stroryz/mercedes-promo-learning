const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');

for (let btn of tabsHandlerElems) {
  btn.addEventListener('click', () => {
    tabsHandlerElems.forEach(item => {
      item.classList.remove('design-list__item_active');
      btn.classList.add('design-list__item_active');
    })

    tabsFieldElems.forEach(field => {
      if (field.dataset.tabsField === btn.dataset.tabsHandler) {
        field.classList.remove('hidden');
      } else {
        field.classList.add('hidden');
      }
    })
  })
}