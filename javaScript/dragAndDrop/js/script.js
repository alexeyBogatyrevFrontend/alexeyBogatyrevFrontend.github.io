const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')
let currentItem

items.forEach(item => {
    item.addEventListener('dragstart', dragstart)
    item.addEventListener('dragend', dragend)
})

function dragstart(event) {
    currentItem = event.target
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0);
}

function dragend(event) {
    event.target.className = 'item'
}

placeholders.forEach(elem => {
    elem.addEventListener('dragover', dragOver)
    elem.addEventListener('dragenter', dragEnter)
    elem.addEventListener('dragleave', dragLeave)
    elem.addEventListener('drop', dragDrop)
})

function dragOver(event) {
    event.preventDefault()
}

function dragEnter(event) {
    this.classList.add('hovered')
}

function dragLeave(event) {
    this.classList.remove('hovered')
}

function dragDrop(event) {
    this.classList.remove('hovered')
    this.append(currentItem)
}