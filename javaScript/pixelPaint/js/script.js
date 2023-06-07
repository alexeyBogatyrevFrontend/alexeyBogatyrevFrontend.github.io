const board = document.querySelector('#board')
const colors = document.querySelectorAll('.header__colors-item')
const yourColor = document.querySelector('#yourColor')

function setSquareCount() {
    let countsX = +document.querySelector('#squareCountX').value
    let countsY = +document.querySelector('#squareCountY').value

    if ((countsX < 100) || (countsY < 100)) {
        alert('Минимальная ширина и высота холста должна быть 100 пикселей!')
    } else if (countsX > 1140) {
        alert('Максимальная ширина холста может быть 1140 пикселей!')
    } else {
        board.innerHTML = ''
        board.style.maxWidth = `${countsX}px`
        board.style.maxHeight = `${countsY}px`

        let squareCounts = Math.floor((countsX / 30)) * Math.floor((countsY / 30))
        console.log(squareCounts);

        for (let i = 0; i < squareCounts; i++) {
            let square = document.createElement('div')
            square.classList.add('square')
            square.addEventListener('mouseover', () => setColor(square, event))
            board.append(square)
        }

        document.querySelector('#squareCountX').value = ''
        document.querySelector('#squareCountY').value = ''

        document.querySelector('#colors').style.display = 'block'
    }
}

function valueToHex(c) {
    let hex = c.toString(16);

    return hex
}
function rgbToHex(r, g, b) {
    return (valueToHex(r) + valueToHex(g) + valueToHex(b));
}

colors.forEach(color => {
    color.addEventListener('click', function () {
        let r = this.style.backgroundColor.split('(',)[1].split(')')[0].split(',')[0]
        let g = this.style.backgroundColor.split('(',)[1].split(')')[0].split(',')[1].split(' ')[1]
        let b = this.style.backgroundColor.split('(',)[1].split(')')[0].split(',')[2].split(' ')[1]
        yourColor.value = `#${rgbToHex(parseInt(r), parseInt(g), parseInt(b))}`
    })
})

function setColor(item, event) {
    if (event.buttons === 1) {
        item.style.background = yourColor.value
    } else if (event.buttons === 2) {
        item.style.background = '#1d1d1d'
    }
}

function onlyNumbers(input) {
    input.value = input.value.replace(/\D/g, '')
}

document.querySelector('#squareCountBtn').addEventListener('click', setSquareCount)

if (window.innerWidth <= 992) {
    document.querySelector('#wrapper').style.justifyContent = 'center'
    document.querySelector('#wrapper').style.alignItems = 'center'
    document.querySelector('#wrapper').innerHTML = `
        <h1 id="titleForMobile" class="header__title">Зайдите на данный сайт через компьютер!</h1>
    `
    document.querySelector('#titleForMobile').style.whiteSpace = 'pre-wrap'

}