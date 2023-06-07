// let a = 6;
// let b = 'Hello';

// console.log(a);
// console.log(b);

/* let input = document.querySelector('.inputIn')
let btn = document.querySelector('button')
let div = document.querySelector('.out')

btn.onclick = function () {
    let b = input.value;
    div.innerHTML = b
    input.value = ''
} */

// 1
// let a = 7;
// let b = 9;
// console.log(a * b);

// 2
// let c = 7
// let d = 9
// console.log(c / d);

// 3
// let e = 3
// let f = 5
// console.log(e + f);

// 4
// let e1 = '3'
// let f1 = 5
// console.log(e1 + f1);

// 5
// let e2 = 3
// let f2 = 0
// console.log(e2 / f2);

// 6
// let e3 = 3
// let f3 = 'Hello'
// console.log(e3 + f3);

// 7
// let e4 = 3
// let f4 = 'hello'
// console.log(e4 * f4);

// 8
/* let input = document.querySelector('.input')
let btn = document.querySelector('button')

btn.onclick = function () {
    console.log(input.value);
} */

// 9

/* let input = document.querySelector('.input')
let btn = document.querySelector('button')
let div = document.querySelector('.out')

btn.onclick = function () {
    div.innerHTML = input.value
    input.value = ''
} */

// 10
/* let input = document.querySelector('.input')
let btn = document.querySelector('button')
let div = document.querySelector('.out')

btn.onclick = function () {
    div.innerHTML = +input.value * 10
    input.value = ''
} */

// 11
/* let input = document.querySelector('.input')
let btn = document.querySelector('button')
let div = document.querySelector('.out')

btn.onclick = function () {
    div.innerHTML = input.value + 10
    input.value = ''
} */

// 12
/* let name = document.querySelector('.name')
let surname = document.querySelector('.surname')
let btn = document.querySelector('button')
let div = document.querySelector('.out')

btn.onclick = function () {
    console.log(`Hello ${name.value} ${surname.value}` );
    
} */

// 13
/* let name = document.querySelector('.name')
let surname = document.querySelector('.surname')
let btn = document.querySelector('button')
let div = document.querySelector('.out')

btn.onclick = function () {
    div.innerHTML = +name.value + +surname.value
    name.value = ''
    surname.value = ''
} */

// 14
/* let name = document.querySelector('.name')
name.value = 'hello'
console.log(name.value); */

// 15
// let y = document.querySelector('.name')
// y.style.border = '2px solid red'

// 16 
/* let name = document.querySelector('.name')
let surname = document.querySelector('.surname')
let btn = document.querySelector('button')
let div = document.querySelector('.out')

btn.onclick = function () {
    div.innerHTML = +name.value + +surname.value
    name.value = ''
    surname.value = ''
} */

// 17
/* let name = document.querySelector('.name')
let surname = document.querySelector('.surname')
let btn = document.querySelector('button')
let div = document.querySelector('.out')

btn.onclick = function () {
    let t = name.value
    t = parseInt(t)
    
    console.log(t);
} */

// 18
/* let name = document.querySelector('.name')
let surname = document.querySelector('.surname')
let btn = document.querySelector('button')
let div = document.querySelector('.out')

btn.onclick = function () {
    let t = name.value
    t = parseFloat(t)
    
    console.log(t);
} */

// 19
/* let name = document.querySelector('.name')
let surname = document.querySelector('.surname')
let btn = document.querySelector('button')
let div = document.querySelector('.out')

btn.onclick = function () {
    div.innerHTML = +name.value + +surname.value
} */

// 20
let name = document.querySelector('.name')
let surname = document.querySelector('.surname')
let age = document.querySelector('.age')
let work = document.querySelector('.work')
let btn = document.querySelector('button')
let div = document.querySelector('.out')

btn.onclick = function () {
    div.innerHTML = `Уважаемый ${name.value}, ${surname.value}, ваш возраст ${age.value} лет, по професии вы ${work.value}`
}