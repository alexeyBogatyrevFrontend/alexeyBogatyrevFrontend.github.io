// media
if (window.innerWidth <= 368) {
    document.querySelector('.main').classList.remove('index')

    let br = document.createElement('br')
    document.querySelector('.spin__subTitle span').append(br)
}

// fortune wheel
const btnTryAgain = document.querySelector('#btnTryAgain')
const btnMoney = document.querySelector('#btnMoney')
const spinBtn = document.querySelector('#spinBtn')
const spinRefresh = document.querySelector('#spinRefresh')
const downloadApp = document.querySelector('#downloadApp')
const btnGetSms = document.querySelector('#getSms')

function shuffle(array) {
    let currentIndex = array.length
    let randomIndex

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[
            ([array[currentIndex], array[randomIndex]] = [
                array[currentIndex],
                array[currentIndex],
            ]),
        ]

        return array
    }
}
let runningFunctions = 0

function spin() {
    runningFunctions++
    console.log(runningFunctions)

    const fortune = document.querySelector('#fortune')
    let selectItem = ''

    let tryAgain = shuffle([1880, 2260, 2630])
    let bonus1000 = shuffle([1850, 2210, 2570])
    let noWin = shuffle([1780, 2170, 2510])
    let bonus100 = shuffle([1770, 2100, 2470])
    let bonus5000 = shuffle([1680, 2010, 2380])
    let bonus500 = shuffle([1590, 1920, 2290])

    let results = shuffle([
        bonus1000[0],
        tryAgain[0],
        bonus5000[0],
        bonus100[0],
        bonus500[0],
        noWin[0],
    ])

    let latestRandom = results[Math.floor(Math.random() * results.length)]

    if (tryAgain.includes(latestRandom)) selectItem = 'Try Again!'
    if (bonus1000.includes(latestRandom)) selectItem = 'Get Your ₹1000'
    if (noWin.includes(latestRandom)) selectItem = 'No Win'
    if (bonus100.includes(latestRandom)) selectItem = 'Get Your ₹100'
    if (bonus5000.includes(latestRandom)) selectItem = 'Get Your ₹5000'
    if (bonus500.includes(latestRandom)) selectItem = 'Get Your ₹500'

    fortune.style.setProperty('transition', 'all ease 5s')
    fortune.style.transform = `rotate(${latestRandom}deg)`

    btnTryAgain.disabled = true
    btnMoney.disabled = true
    spinBtn.disabled = true
    spinRefresh.disabled = true

    // modal after prise
    setTimeout(function () {
        if (runningFunctions === 3) {
            let winText = document.querySelector(
                '#modalPhone h2.modalBonus__title'
            )
            let noWinText = document.querySelector(
                '#modalPhone h3.modalBonus__title'
            )

            if (selectItem === 'No Win' || selectItem === 'Try Again!') {
                noWinText.querySelector('span').textContent = selectItem
                winText.style.display = 'none'
                noWinText.style.display = 'block'
            } else {
                winText.querySelector('span').textContent = selectItem
                winText.style.display = 'block'
                noWinText.style.display = 'none'
            }

            modal('modalPhone', 'modalPhoneBg')
        } else {
            let winText = document.querySelector(
                '#modalBonus h2.modalBonus__title'
            )
            let noWinText = document.querySelector(
                '#modalBonus h3.modalBonus__title'
            )

            if (selectItem === 'No Win' || selectItem === 'Try Again!') {
                noWinText.querySelector('span').textContent = selectItem
                winText.style.display = 'none'
                noWinText.style.display = 'block'
            } else {
                winText.querySelector('span').textContent = selectItem
                winText.style.display = 'block'
                noWinText.style.display = 'none'
            }

            modal('modalBonus', 'modalBonusBg')
        }
    }, 5500)

    // styles after prise
    setTimeout(function () {
        fortune.style.setProperty('transition', 'initial')
        fortune.style.transform = 'rotate(90deg)'

        btnTryAgain.disabled = false
        btnMoney.disabled = false
        spinBtn.disabled = false
        spinRefresh.disabled = false
    }, 6000)
}

function getLinkSms() {
    let phoneNumber = `${document.querySelector('#form select').value}${
        document.querySelector('#form input').value.split(' ')[1] +
        document.querySelector('#form input').value.split(' ')[2]
    }`

    return phoneNumber
}

function modal(modal, bg) {
    document.querySelector(`#${modal}`).classList.toggle('active')
    document.querySelector(`#${bg}`).classList.toggle('active')
}

// inputmask
const form = document.querySelector('#form')
const telSelector = form.querySelector('input[type="tel"]')
const inputMask = new Inputmask(' (9999) 999-999')
inputMask.mask(telSelector)

// validate
new window.JustValidate('.form', {
    rules: {
        tel: {
            required: true,
            function: () => {
                const phone = telSelector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            },
        },
    },
    messages: {
        tel: {
            required: 'Enter your phone',
            function: 'This should be 10 characters without +9*',
        },
    },
    submitHandler: function (thisForm) {
        document.querySelector('#rightNumber').value = getLinkSms()

        let formData = new FormData(thisForm)

        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('sent')
                    document
                        .querySelector('.successAlert')
                        .classList.add('active')
                    setTimeout(() => {
                        document
                            .querySelector('.successAlert')
                            .classList.remove('active')
                    }, 5000)
                    modal('modalPhone', 'modalPhoneBg')
                }
            }
        }

        xhr.open('POST', 'php/add.php', true)
        xhr.send(formData)

        thisForm.reset()
    },
}) // events

// buttons
window.btnTryAgain.addEventListener('click', spin)
btnMoney.addEventListener('click', spin)
spinBtn.addEventListener('click', spin)
spinRefresh.addEventListener('click', spin)
// btnGetSms.addEventListener('click', getLinkSms)

// modals
document.querySelector('#modalBonusClose').addEventListener('click', () => {
    modal('modalBonus', 'modalBonusBg')
})

document.querySelector('#modalBonusBg').addEventListener('click', () => {
    modal('modalBonus', 'modalBonusBg')
})

document.querySelector('#modalPhoneClose').addEventListener('click', () => {
    modal('modalPhone', 'modalPhoneBg')
})

document.querySelector('#modalPhoneBg').addEventListener('click', () => {
    modal('modalPhone', 'modalPhoneBg')
})

downloadApp.addEventListener('click', () => {
    modal('modalBonus', 'modalBonusBg')
})
