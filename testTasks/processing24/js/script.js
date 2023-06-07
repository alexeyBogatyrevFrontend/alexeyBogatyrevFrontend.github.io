function menu(btn, body, bg) {
    document.querySelector(`#${btn}`).classList.toggle('active')
    document.querySelector(`#${body}`).classList.toggle('active')
    document.querySelector(`#${bg}`).classList.toggle('active')
    document.querySelector('body').classList.toggle('hidden')
}

function dropdown(body, bg, svg) {
    document.querySelector(`#${body}`).classList.toggle('active')
    document.querySelector(`#${bg}`).classList.toggle('active')
    document.querySelector(`#${svg}`).classList.toggle('rotate')
}

function range(input) {
    document.querySelector('#inputRangeBody').value = `${input.value} л.`
}

new Swiper('.certificates__slider', {
    navigation: {
        nextEl: '.certificates__arrows-button-next',
        prevEl: '.certificates__arrows-button-prev'
    },
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1120: {
            slidesPerView: 4,
        }
    }
})

new Swiper('.partners__slider', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    pagination: {
        el: '.partners__dotts',
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        568: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1120: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        }
    }
})

new Swiper('.comments__slider', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.comments__arrows-button-next',
        prevEl: '.comments__arrows-button-prev'
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        568: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        1120: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    }
})