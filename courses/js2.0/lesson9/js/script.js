/* let one = document.querySelector('.one')
let toggle = document.querySelector('.btn')

one.style.width = '150px'
one.classList.add('two', 'three')
one.classList.remove('three')

toggle.onclick = function () {
    this.classList.toggle('three')
}

// attributes

console.log(one.getAttribute('data-hello'))
console.log(document.querySelector('link').getAttribute('href'));
one.setAttribute('data-num', 6)

let gas = document.querySelectorAll('.gas')
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value
        let amount = this.getAttribute('data')
        console.log(gallons * amount);
    }
}

// create element

let a = document.createElement('div')
a.innerHTML = 'hello'
a.classList.add('one')
a.onclick = function () {
    alert('hello')
}

document.querySelector('.test').appendChild(a)
console.log(a); */

// home work
const btn = document.querySelector('.btn')
const out = document.querySelector('.out')
// 1
/* btn.onclick = function f() {
    out.style = `
        width: 200px;
        height: 40px;
    `
} */
// 2
/* btn.onclick = function f() {
    out.classList.add('bg-2')
} */
// 3
/* btn.onclick = function f() {
    out.classList.remove('bg-2')
} */
// 4
/* btn.onclick = function f() {
    out.classList.toggle('bg-2')
} */
// 5
/* btn.onclick = function f() {
    if (out.classList.contains('bg-4')) {
        out.innerHTML = true
    } else {
        out.innerHTML = false
    }
} */
// 6
/* btn.onclick = function f() {
    let p = document.querySelectorAll('.p-6')
    out.innerHTML = p.length
} */
// 7
/* btn.onclick = function f() {
    let out = document.querySelectorAll('.out7')
    for (let i = 0; i < out.length; i++) {
        out[i].classList.add('bg-2')
    }
} */
// 8
/* btn.onclick = function f() {
    let out = document.querySelectorAll('.out7')
    for (let i = 0; i < out.length; i++) {
        out[i].classList.toggle('bg-2')
    }
} */
// 9
/* let out7 = document.querySelectorAll('.out7')
for (let i = 0; i < out7.length; i++) {
    out7[i].onclick = function f() {
        this.classList.add('bg-2')
    }
} */
// 10
/* let out7 = document.querySelectorAll('.out7')
for (let i = 0; i < out7.length; i++) {
    out7[i].onclick = function f() {
        this.classList.toggle('bg-2')
    }
} */
// 11
/* btn.onclick = function f() {
    let div = document.createElement('div')
    div.innerHTML = '25'
    out.append(div)
} */
// 12
/* btn.onclick = function f() {
    let div = document.createElement('div')
    div.innerHTML = '12'
    div.classList.add('bg-2')
    out.append(div)
} */
// 13
/* btn.onclick = function f() {
    let div = document.createElement('div')
    div.innerHTML = 'pushMe '
    div.classList.add('bg-2')
    div.onclick = function f13_1() {
        alert('123')
    }
    out.append(div)
} */
// 14
/* btn.onclick = function f() {
    let div = document.createElement('div')
    div.innerHTML = '14 '
    div.classList.add('bg-2')
    out.prepend(div)
} */
// 15
/* btn.onclick = function f() {
    let div = document.createElement('div')
    div.innerHTML = '15'
    div.classList.add('bg-2')
    out.before(div)
} */
// 16
/* btn.onclick = function f() {
    let div = document.createElement('div')
    div.innerHTML = '16'
    div.classList.add('bg-2')
    out.after(div)
} */
// 17
/* btn.onclick = function f() {
    let div = document.createElement('div')
    div.innerHTML = '17'
    div.classList.add('bg-2')
    out.replaceWith(div)
} */
// 18
/* btn.onclick = function f() {
    let p = document.querySelector('.p18')

    out.innerHTML = p.getAttribute('data-b')
} */
// 19
/* btn.onclick = function f() {
    let p = document.querySelectorAll('.p18')

    for (let i = 0; i < p.length; i++) {
        out.innerHTML += p[i].getAttribute('data-b') + ' '
    }
    p.forEach(e => {
        out.innerHTML += e.getAttribute('data-b') + ' '
    })
} */
// 20
/* btn.onclick = function f() {
    out.setAttribute('title', 'go')
} */