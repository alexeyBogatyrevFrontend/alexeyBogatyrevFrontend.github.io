const cards = document.querySelectorAll('.main__card')

function selected(elem) {
    elem.classList.toggle('selected')

    if (elem.classList.contains('selected')) {
        elem.removeAttribute('oncontextmenu')
        if (elem.parentElement.children[1].getAttribute('data-name') === 'duck') {
            elem.parentElement.children[1].innerText = 'Печень утки разварная с артишоками.'
        }
        if (elem.parentElement.children[1].getAttribute('data-name') === 'fish') {
            elem.parentElement.children[1].innerText = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        }
        if (elem.parentElement.children[1].getAttribute('data-name') === 'chicken') {
            elem.parentElement.children[1].innerText = 'Филе из цыплят с трюфелями в бульоне.'
        }
        // this.parentElement.children[1].innerText = 'Печень утки разварная с артишоками.'
    } else {
        elem.setAttribute('oncontextmenu', 'disabled(this)')
        if (elem.parentElement.children[1].getAttribute('data-name') === 'duck') {
            elem.parentElement.children[1].innerHTML = `Чего сидишь? Порадуй котэ, <span onclick="selected(this.parentElement.parentElement.children[0])">купи.</span>`
        }
        if (elem.parentElement.children[1].getAttribute('data-name') === 'fish') {
            elem.parentElement.children[1].innerHTML = `Чего сидишь? Порадуй котэ, <span onclick="selected(this.parentElement.parentElement.children[0])">купи.</span>`
        }
        if (elem.parentElement.children[1].getAttribute('data-name') === 'chicken') {
            elem.parentElement.children[1].innerHTML = `Чего сидишь? Порадуй котэ, <span onclick="selected(this.parentElement.parentElement.children[0])">купи.</span>`
        }
    }
}

function disabled(elem) {
    elem.classList.toggle('disabled')

    if (elem.classList.contains('disabled')) {
        elem.removeAttribute('onclick')
        if (elem.parentElement.children[1].getAttribute('data-name') === 'duck') {
            elem.parentElement.children[1].style.color = '#FFFF66'
            elem.parentElement.children[1].innerText = 'Печалька, с фуа-гра закончился.'
        }
        if (elem.parentElement.children[1].getAttribute('data-name') === 'fish') {
            elem.parentElement.children[1].style.color = '#FFFF66'
            elem.parentElement.children[1].innerText = 'Печалька, с рыбой закончился.'
        }
        if (elem.parentElement.children[1].getAttribute('data-name') === 'chicken') {
            elem.parentElement.children[1].style.color = '#FFFF66'
            elem.parentElement.children[1].innerText = 'Печалька, с курой закончился.'
        }
    } else {
        elem.setAttribute('onclick', 'selected(this)')
        if (elem.parentElement.children[1].getAttribute('data-name') === 'duck') {
            elem.parentElement.children[1].style.color = '#FFFFff'
            elem.parentElement.children[1].innerHTML = `Чего сидишь? Порадуй котэ, <span onclick="selected(this.parentElement.parentElement.children[0])">купи.</span>`
        }
        if (elem.parentElement.children[1].getAttribute('data-name') === 'fish') {
            elem.parentElement.children[1].style.color = '#FFFFff'
            elem.parentElement.children[1].innerHTML = `Чего сидишь? Порадуй котэ, <span onclick="selected(this.parentElement.parentElement.children[0])">купи.</span>`
        }
        if (elem.parentElement.children[1].getAttribute('data-name') === 'chicken') {
            elem.parentElement.children[1].style.color = '#FFFFff'
            elem.parentElement.children[1].innerHTML = `Чего сидишь? Порадуй котэ, <span onclick="selected(this.parentElement.parentElement.children[0])">купи.</span>`
        }
    }
}


cards.forEach(elem => elem.setAttribute('onclick', 'selected(this)'))

cards.forEach(elem => elem.setAttribute('oncontextmenu', 'disabled(this)'))