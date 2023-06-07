const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCounts = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')
let activeSlide = 0

sidebar.style.top = `-${(slidesCounts - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowDown') {
        changeSlide('down')
    } else if(event.key === 'ArrowUp') {
        changeSlide('up')
    }
})

function changeSlide(direction) {
    if(direction === 'up') {
        activeSlide++
        if(activeSlide === slidesCounts) {
            activeSlide = 0
        }
    } else if(direction === 'down') {
        activeSlide--
        if(activeSlide < 0) {
            activeSlide = slidesCounts - 1
        }
    }

    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlide * height}px)`
    sidebar.style.transform = `translateY(${activeSlide * height}px)`
}