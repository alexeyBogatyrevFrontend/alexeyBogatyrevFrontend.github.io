let out = document.querySelector('.out')

/* for (let i = 0; i < 5; i++) {
    for(let k = 0; k < 10; k++) {
        out.innerHTML += '*'
    }
    out.innerHTML += '<br>'
} */

/* for (let i = 1; i < 10; i++) {
    for(let k = 1; k < 10; k++) {
        out.innerHTML += `${i}*${k}=${k * i}<br>`
    }
    out.innerHTML += '<hr>'
} */

// 1
/* for(i = 0; i < 3; i++) {
    for(k = 0; k <3; k++) {
        out.innerHTML += '*'
    }
    out.innerHTML += '_'
} */
// 2
/* for(let i = 1; i < 4; i++) {
    out.innerHTML += `${i}<br>`
    for(let k = 1; k < 4; k++) {
        out.innerHTML += `*_`
    }
    out.innerHTML += `<br>`
} */
// 3
/* for(let i = 0; i < 4; i++) {
    for(let k = 0; k < 3; k++) {
        out.innerHTML += `*_`
    }
    out.innerHTML += `<br>`
    
} */
// 4
/* for(let i = 1; i < 4; i++) {
    out.innerHTML += `${i}_`
    for(let k = 1; k < 6; k++) {
        out.innerHTML += `${k} `
    }
} */
// 5
/* for(let i = 0; i < 3; i++) {
    for(let k = 0; k < 6; k++) {
        if(k % 2 == 0) {
            out.innerHTML += '1'
        } else {
            out.innerHTML += '0'
        }
        
    }
    out.innerHTML += `<br>`
} */
// 6
/* for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 6; k++) {
        if ((k % 2 == 0) && !(k % 3 == 0)) {
            out.innerHTML += '0'
        } else if ((k % 2 == 1) && !(k % 3 == 0)) {
            out.innerHTML += '1'
        } else {
            out.innerHTML += 'x'
        }

    }
    out.innerHTML += `<br>`
} // Эту задачу я посмотрел в интернете */
// 7
/* for(let i = 0; i < 4; i++) {
    for(let k = 0; k <= i; k++) {
        out.innerHTML += '*'
    }
    out.innerHTML += '<br>'
} */
// 8
/* for(let i = 0; i < 5; i++) {
    for(let k = 5; k > i; k--) {
        out.innerHTML += '*'
    }
    out.innerHTML += '<br>'
} */
// 9
/* for(let i = 0; i < 5; i++) {
    for(let k = 0; k <= i; k++) {
        out.innerHTML += `${k + 1} `
    }
    out.innerHTML += '<br>'
} */
// 10
/* let a = ''
for(let i = 0; i < 5; i++) {
    out.innerHTML += '<br>'
    for(let k = 1; k <= 10; k++) {
        if(k < 10) {
            out.innerHTML += `${i}${k} `
        } else {
            out.innerHTML += `${k * (i + 1)}`
        }
        
    }
    
} */ // Эту задачу я посмотрел в интернете 

// задачи на прокачку

// 1
/* for(let i = 1; i < 10; i++) {
    for(let k = 1; k < 10; k++) {
        out.innerHTML += `${i} * ${k} = ${i * k} <br>`
    }
    out.innerHTML += '<hr>'
} */
// 2
/* for(let i = 0; i < 3; i++) {
    for(let k = 0; k < 5; k++) {
        out.innerHTML += '*'
    }
    out.innerHTML += '<br>'
} */
// 4
/* for(let i = 0; i < 5; i++) {
    for(let k = 5; k > i; k--) {
        out.innerHTML += '*'
    }
    out.innerHTML += '<br>'
} */
// 5
/* for (let i = 0; i < 3; i++) {
    for(let j = 2; j > i; j--) {
        out.innerHTML += '&nbsp'
    }
    for (let k = 0; k < 5; k++) {
        out.innerHTML += '*'
    }
    out.innerHTML += '<br>'
} */
// 6
/* for (let i = 0; i < 3; i++) {
    for(let j = 0; j <= i ; j++) {
        out.innerHTML += '*'
    }
    out.innerHTML += '<br>'
}
for (let a = 0; a < 2; a++) {
    for(let p = 2; p > a ; p--) {
        out.innerHTML += '*'
    }
    out.innerHTML += '<br>'
} */
// 7
// I don't know
// 8
/* for(let i = 0; i < 5; i++) {
    for(let k = 5; k > i; k--) {
        out.innerHTML += `${k - i} `
    }
    out.innerHTML += '<br>'
} */
// 9
// I don't know
// 11


