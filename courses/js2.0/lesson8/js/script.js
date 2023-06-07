let out = document.querySelector('.out')
let btn = document.querySelector('.btn')
let input = document.querySelector('.i')
let input2 = document.querySelector('.i2')
/* for (let i = 0; i < 6; i++) {
    console.log(i);
} */

/* let k = 0
while (k < 5) {
    k++
    console.log('k: ' + k);
} */

// 0 + ... + 10

/* let sum = 0
let p = 0

while (p <= 3) {
    sum = sum + p
    p++
}
console.log('sum: ' + sum); */

// *****
// *****
// *****

/* let j = 0
let outStr = ''
let flag = 3

while (j < 4) {
    let j1 = 0
    while (j1 < 4) {
        if (j1 < flag) {
            outStr += 'x'
        } else {
            outStr += '*'
        }
        j1++
    }
    flag--
    outStr += '<br>'
    j++
}
out.innerHTML = outStr */

// Control work
// 1
/* btn.onclick = function t1() {
    let i = 0
    while (i < 50) {
        i++
        out.innerHTML += i + ' '
    }
} */
// 2
/* btn.onclick = function t1() {
    let i = 2
    while (i < 122) {
        i = i + 2
        out.innerHTML += i + ' '
    }
} */
// 3
/* btn.onclick = function t1() {
    let i = 25
    while (i >= 7) {
        out.innerHTML += i + ' '
        i--
    }
} */
// 4
/* btn.onclick = function t1() {
    let i = 77
    while (i >= 35) {
        out.innerHTML += i + '_'
        i = i - 3
    }
} */
// 5
/* btn.onclick = function t1() {
    let i = 1
    while (i <= 17) {
        if (i % 2 == 0) {
            out.innerHTML += i + '_**'
        } else {
            out.innerHTML += i + '_*'
        }
        i++

    }
} */
// 6
/* btn.onclick = function t1() {
    let i = 0
    while (i < 3) {
        let k = 0
        while (k < 6) {
            out.innerHTML += '*'
            k++
        }
        out.innerHTML += '<br>' + '<br>'
        i++
    }
} */
// 7
/* btn.onclick = function t1() {

    while (input.value >= 0) {
        out.innerHTML += input.value + ' '
        input.value--

    }
} */
// 8
/* btn.onclick = function t1() {
    let first = input.value
    let second = input2.value

    while (first <= second) {
        out.innerHTML += first + ' '
        first++

    }
} */
// 9
/* btn.onclick = function t1() {
    let first = +input.value
    let second = +input2.value

    if (first < second) {
        while (first <= second) {
            out.innerHTML += first + ' '
            first++
        }
    } else {
        while (first >= second) {
            out.innerHTML += second + ' '
            second++
        }
    }
} */
// 10
/* btn.onclick = function t1() {
    let i = 1950

    while (i <= 2000) {
        out.innerHTML += i + ' '
        i = i + 2
    }
} */
// 11
/* btn.onclick = function t1() {
    let div = document.querySelectorAll('.div11')
    let i = 0

    while (i < div.length) {
        out.innerHTML += div[i].innerHTML + ' '
        i++
    }
} */
// 12
/* btn.onclick = function t1() {
    let div = document.querySelectorAll('.div11')
    let i = 0

    while (i < div.length) {
        div[i].style.background = 'orange'
        i++
    }
} */
// 13
/* btn.onclick = function t1() {
    let input = document.querySelectorAll('.i13')
    let i = 0

    while (i < input.length) {
        input[i].value = i + 1
        i++
    }
} */
// 14
/* btn.onclick = function t1() {
    let input = document.querySelectorAll('.i13')
    let i = 0

    while (i < input.length) {
        if (input[i].checked) {
            out.innerHTML += input[i].value
        }
        i++
    }
} */
// 15
/* btn.onclick = function t1() {
    let i = 10

    while (i >= 0) {
        out.innerHTML += i + ' '
        out.innerHTML += 10 - i + ' '
        i--
    }
} */
