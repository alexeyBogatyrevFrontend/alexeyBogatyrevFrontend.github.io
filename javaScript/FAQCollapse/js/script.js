const toggles = document.querySelectorAll('.faq__toggle')

toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentElement.classList.toggle('active')
    })
})
