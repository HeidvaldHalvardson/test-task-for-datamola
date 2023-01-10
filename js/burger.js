const list = document.querySelector('.contacts__list')
const toogle = document.querySelector('.contacts__toogle')

list.classList.remove('contacts__list--nojs')
toogle.classList.remove('contacts__toogle--nojs')

toogle.addEventListener('click', () => {
  if (list.classList.contains('contacts__list--closed')) {
    list.classList.remove('contacts__list--closed')
  } else {
    list.classList.add('contacts__list--closed')
  }
})
