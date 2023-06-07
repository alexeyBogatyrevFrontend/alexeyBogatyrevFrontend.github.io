const links = document.querySelectorAll('.link')
const dropdowns = document.querySelectorAll('.menu-dropdown .menu-dropdown__header')

const activeLink = (link) => {
    links.forEach(elem => {
        elem.classList.remove('active')
    })
    link.classList.add('active')

}

links.forEach(link => {
    link.addEventListener('click', () => {
        activeLink(link)
    })
})

const activeDropdown = (dropdown) => {
    dropdown.parentElement.children[1].classList.toggle('active')
    if (dropdown.parentElement.children[1].classList.contains('active')) {
        dropdown.parentElement.children[1].querySelectorAll('li').forEach(li => {
            li.style.display = 'block'
        })

        dropdown.parentElement.children[1].style.height = 'auto'
        dropdown.parentElement.children[1].style.height = `${dropdown.parentElement.children[1].getBoundingClientRect().height}px`
    } else {
        dropdown.parentElement.children[1].querySelectorAll('li').forEach(li => {
            li.style.display = 'none'
        })

        dropdown.parentElement.children[1].style.height = '0px'
    }
    dropdown.querySelector('svg').classList.toggle('rotate')

    // if (window.innerWidth <= 768) {
    //     if (dropdown.parentElement.children[1].classList.contains('active')) {
    //         document.querySelector('#menuContent').style.overflow = 'auto'
    //     } else {
    //         document.querySelector('#menuContent').style.overflow = 'hidden'
    //     }
    // }
}

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        activeDropdown(dropdown)
    })
})

const burgerMenu = (elem) => {
    elem.classList.toggle('active')
    document.querySelector('body').classList.toggle('hidden')
}

document.querySelector('#burgerMenu').addEventListener('click', () => {
    burgerMenu(document.querySelector('#menuContent'))
})

document.querySelector('#burgerClose').addEventListener('click', () => {
    burgerMenu(document.querySelector('#menuContent'))
})

