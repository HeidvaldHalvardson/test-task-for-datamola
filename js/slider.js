const slides = document.querySelectorAll('.projects__item')
const leftButton = document.querySelector('.projects__button--left')
const rightButton = document.querySelector('.projects__button--right')

const slidesCount = slides.length

let activeSlideIndex = 0


function visionSlide(index) {
  for (let i = 0; i < slidesCount; i++) {
    slides[i].style.display = 'none'

    if (index === i) {
      slides[i].style.display = 'block'
    }
  }
}

leftButton.addEventListener('click', () => {
  changeSlide('left')
})

rightButton.addEventListener('click', () => {
  changeSlide('right')
})

function changeSlide(direction) {
  if (direction === 'left') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  if (direction === 'right') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  }

  visionSlide(activeSlideIndex)
}

visionSlide(activeSlideIndex)


console.log(slidesCount)
