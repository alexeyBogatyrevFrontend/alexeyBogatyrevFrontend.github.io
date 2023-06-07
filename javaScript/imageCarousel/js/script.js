const images = document.querySelector('#imgs')
const prev = document.querySelector('#left')
const next = document.querySelector('#right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    images.style.transform = `translateX(${-idx}00%)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

next.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

prev.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})
