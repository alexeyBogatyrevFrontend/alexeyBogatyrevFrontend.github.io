const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

panel.addEventListener('click', (e) => {
    if (e.target.classList.contains('rating')) {
        removeActive()
        e.target.classList.add('active')
        selectedRating = e.target.querySelector('small').textContent
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <p>Feedback: <strong>${selectedRating}</strong></p>
        <br>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

function removeActive() {
    ratings.forEach((rating) => {
        rating.classList.remove('active')
    })
}
