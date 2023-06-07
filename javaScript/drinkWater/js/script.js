const smallCups = document.querySelectorAll('.cups .cups__small')
const liters = document.querySelector('#liters')
const percentage = document.querySelector('#percentage')
const remained = document.querySelector('#remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        highlightCups(idx)
    })
})

function highlightCups(idx) {
    if (smallCups[idx].classList.contains('full')) {
        idx--
    }
    smallCups.forEach((cup, index) => {
        if (index <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cups .cups__small.full').length
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = '0'
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${(fullCups / totalCups) * 330}px`
        percentage.textContent = `${(fullCups / totalCups) * 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.textContent = `${2 - (250 * fullCups) / 1000}L`
    }
}
