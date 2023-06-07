// menu
const burger = document.querySelector('.burger')
const menu = document.querySelector('#menu')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    document.querySelector('body').classList.toggle('hidden')
})

// dropdown
const dropdown = document.querySelector('.dropdown')
const dropdownCurrent = document.querySelector('.dropdown__current')
const dropdownContent = document.querySelector('.dropdown__content')

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active')
})

dropdownContent.querySelectorAll('.dropdown__item').forEach((elem) => {
    elem.addEventListener('click', () => {
        let text = elem.textContent.trim()
        let src = elem.querySelector('img').src

        dropdownCurrent.innerHTML = `
            <div class="dropdown__item">
                <div class="dropdown__item-img">
                    <img src="${src}" alt="picture">
                </div>
                <div class="dropdown__item-figure">${text}</div>
            </div>
        `
    })
})

// form
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

form.querySelectorAll('input').forEach((elem) => {
    elem.addEventListener('input', () => {
        elem.parentElement.classList.remove('done')

        if (elem.value.trim() !== '') {
            elem.parentElement.classList.add('done')
        }
    })
})

// modal
const modal = document.querySelector('.modal')

setTimeout(() => {
    modal.classList.add('active')
    document.querySelector('body').classList.add('hidden')
}, 60000)

modal.querySelector('.modal__bg').addEventListener('click', () => {
    modal.classList.toggle('active')
    document.querySelector('body').classList.toggle('hidden')
})

// generator
const resultEl = document.querySelector('#password')
const generateEl = document.querySelector('#generate')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

generateEl.addEventListener('click', () => {
    const length = 12
    const hasLower = true
    const hasUpper = true
    const hasNumber = true
    const hasSymbol = true

    resultEl.value = generatePassword(
        hasUpper,
        hasLower,
        hasNumber,
        hasSymbol,
        length
    )
    resultEl.parentElement.classList.add('done')
})

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
        (item) => Object.values(item)[0]
    )
    if (typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach((type) => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}
