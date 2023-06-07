function slidesPlugin (activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    slides.forEach(elem => {
        elem.addEventListener('click', () => {
            clearActiveClasses()
            elem.classList.add('active')
        })
    })
    
    function clearActiveClasses() {
        slides.forEach(elem => {
            elem.classList.remove('active')
        })
    } 
}

slidesPlugin() 