// 1
/* const button = document.querySelector('.b')

button.onclick = () => {
    const out = document.querySelector('.out')
    for (let i = 1; i <= 50; i++) {
        out.innerHTML += `${i} `
    }
} */

// 2
/* const button = document.querySelector('.b')

button.onclick = () => {
    const out = document.querySelector('.out')
    for (let i = 2; i <= 122; i = i + 2) {
        out.innerHTML += `${i} `
    }
} */

// 3
/* const button = document.querySelector('.b')

button.onclick = () => {
    const out = document.querySelector('.out')
    for (let i = 25; i >= 7; i--) {
        out.innerHTML += `${i} `
    }
} */

// 4
/* const button = document.querySelector('.b')

button.onclick = () => {
    const out = document.querySelector('.out')
    for (let i = 77; i >= 35; i = i - 3) {
        out.innerHTML += `${i}${'_'}`
    }
} */

// 5
/* const button = document.querySelector('.b')

button.onclick = () => {
    const out = document.querySelector('.out')
    for (let i = 1; i <= 17; i++) {
        if (i % 2 == 0) {
            out.innerHTML += `${i}${'_'}${'**'}`
        } else {
            out.innerHTML += `${i}${'_'}${'*'}`
        }
    }
} */

// 6
/* const button = document.querySelector('.b')

button.onclick = () => {
    const out = document.querySelector('.out')
    const input = document.querySelector('.i')
    let num = +input.value

    for (let i = 1; i <= num; i++) {
        out.innerHTML += `${'******'}${'<br>'}`
    }
} */

// 7
/* const button = document.querySelector('.b')

button.onclick = () => {
    const out = document.querySelector('.out')
    const input = document.querySelector('.i')
    let num = +input.value

    for (let i = num; i >= 0; i--) {
        out.innerHTML += `${i}${' '}`
    }
} */

// 8
/* const button = document.querySelector('.b')

button.onclick = () => {
    const out = document.querySelector('.out')
    const input = document.querySelector('.i')
    const input2 = document.querySelector('.i2')
    let num = +input.value
    let num2 = +input2.value

    for (let i = num; i <= num2; i++) {
        out.innerHTML += `${i}${' '}`
    }
} */

// 9
/* const button = document.querySelector('.b')

button.onclick = () => {
    const out = document.querySelector('.out')
    const input = document.querySelector('.i')
    const input2 = document.querySelector('.i2')
    let num = +input.value
    let num2 = +input2.value

    if (num > num2) {
        for (let i = num2; i <= num; i++) {
            out.innerHTML += `${i}${' '}`
        }
    } else {
        for (let i = num; i <= num2; i++) {
            out.innerHTML += `${i}${' '}`
        }
    }

    
} */

// 10
/* const button = document.querySelector('.b')

button.onclick = () => {
    const out = document.querySelector('.out')

   for(let i = 1950; i <= 2000; i = i + 2) {
    out.innerHTML += `${i} `
   }
} */

// 11
/* const button = document.querySelector('.b')

button.onclick = () => {
    const out = document.querySelector('.out')
    let elem = document.querySelectorAll('.div')
    for (let i = 0; i < elem.length; i++) {
        out.innerHTML += `${elem[i].innerHTML} `
    }
} */

// 12
/* const button = document.querySelector('.b')

button.onclick = () => {
    const out = document.querySelector('.out')
    let elem = document.querySelectorAll('.div')
    
    for (let i = 0; i < elem.length; i++) {
        elem[i].style.background = 'orange'
    }
} */

// 13
const button = document.querySelector('.b')

button.onclick = () => {
    const out = document.querySelector('.out')
    let elem = document.querySelectorAll('.i')

    for (let i = 0; i < elem.length; i++) {
        out.innerHTML += `${elem[i].value} `
    }
}