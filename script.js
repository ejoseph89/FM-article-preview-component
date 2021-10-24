const shareBtn = document.querySelector('button')
const bubble = document.querySelector('.bubble')
shareBtn.addEventListener('click', (e) => {
  bubble.classList.toggle('active')
  e.stopPropagation()
})

document.addEventListener('click', (e) => {
  if(bubble.classList.contains('active')) {
    bubble.classList.toggle('active')
  }
})

document.addEventListener('keyup', (e) => {
  if(e.key == 'Escape' || e.key == 'Space') {
    if(bubble.classList.contains('active')) {
      bubble.classList.toggle('active')
    }
  }
})

const mobileShareBtn = document.querySelector('.share-button')
const bubble2 = document.querySelector('.bubble-2')
mobileShareBtn.addEventListener('click', (e) => {
  console.log('btn clicked')
  bubble2.classList.toggle('active2')
  e.stopPropagation()
})

document.addEventListener('click', (e) => {
  if(bubble2.classList.contains('active2')) {
    bubble2.classList.toggle('active2')
  }
})

document.addEventListener('keyup', (e) => {
  if(e.key == 'Escape' || e.key == 'Space') {
    if(bubble2.classList.contains('active2')) {
      bubble2.classList.toggle('active2')
    }
  }
})
