/* function one() {
    console.log('123');
} */
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')

let out = document.querySelector('.out')
/* btn.onclick = one

function two() {
    console.log('work2');
    return 54
}

two()
console.log(1 + two()); */

/* btn.onclick = () => {
    console.log('hello');
}

document.querySelector('.btn2').onclick = () => {
    console.log('+++');
} */

/* function (a) {
    return 56 * a
} */

/* (a) => {
    'hello' * a
} */

/* let a = 8
let b = 9

function multiply() {
    console.log(a * b);
    return a * b
}

let c1 = multiply()
let c2 = 10 * multiply()
console.log(c1, c2); */

/* function multi2(x = 9, y = 8) {
    return x * y
}
console.log(multi2(4, 5));
console.log(multi2()); */

// control work
// 1
/* let a1 = 8;
function t1() {
    out.innerHTML = a1
}
btn.onclick = t1; */
// 2
/* let a2 = 8;
function t2() {
    return a2
}
btn.onclick = function () {
    out.textContent = t2();
} */
// 3
/* function t3(a, b) {
    return a * b
}
btn.onclick = function () {
    out.textContent = t3(3, 4);
}
btn2.onclick = function () {
    out.textContent = t3(5, 6);
} */
// 4
/* function age(date) {
    return 2022 - date
}
btn.onclick = function () {
    out.textContent = age(2002)
} */
// 5
/* function hi(name) {
    return 'hello ' + name
}
btn.onclick = () => {
    out.textContent = hi('alexey')
} */
// 6
/* function getRandomNumber(a, b) {
    return Math.round((Math.random() * (b - a) + a))
}
btn.onclick = () => {
    out.textContent = getRandomNumber(6, 12)
} */
// 7
/* function getRandomColor(r, g, b) {
    return r + ', ' + g + ', ' + b
}
btn.onclick = () => {
    out.textContent = getRandomColor(111, 234, 255)
} */
// 8
/* function getStringWithoutSpace(text) {
    return text.trim()
}
btn.onclick = () => {
    out.textContent = getStringWithoutSpace(' hello ')
} */
// 9
/* function getInt(int) {
    if (int % 2 == 0) {
        return true
    } else {
        return false
    }
}
btn.onclick = () => {
    out.textContent = getInt(6)
} */
// 10
/* function getFigures(first, second) {
    if (first > second) {
        return first
    } else if (second > first) {
        return second
    } else {
        return first || second
    }
}
btn.onclick = () => {
    out.textContent = getFigures(3, 7)
} */