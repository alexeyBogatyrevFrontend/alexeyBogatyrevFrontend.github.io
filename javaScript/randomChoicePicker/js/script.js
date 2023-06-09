const tagsEl = document.querySelector('#tags')
const textarea = document.querySelector('#textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        e.target.value = ''
        randomSelect()
    }
})

function createTags(input) {
    const tags = input
        .split(',')
        .filter((tag) => tag.trim() !== '')
        .map((tag) => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach((tag) => {
        console.log(tag.length)
        if (tag.length <= 25) {
            const tagEl = document.createElement('span')
            tagEl.classList.add('tag')
            tagEl.innerHTML = tag
            tagsEl.appendChild(tagEl)
        } else {
            alert('Max length is 50')
        }
    })
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = tagsEl.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
