/* // Class work
const button = document.querySelector('button')
const input = document.querySelector('.age')

button.onclick = function () {
    let num = +input.value
    if(num > 18 && num < 100) {
        console.log('welcome');
    } else if (num > 100) {
        console.log('ahahah');
    } else {
        console.log('go back');
    }

    switch (num) {
        case 15:
            console.log('wait a bit');
            break
        case 16: 
            console.log('thats good');
            break
        default:
            console.log('okay');
    }
}

let b = 5
console.log(b == 5 ||  b < 7); */

// 1
/* const b1 = document.querySelector('.b-1')
const i1 = document.querySelector('.i-1')
const out1 = document.querySelector('.out-1')

b1.onclick = function f1() {
    let num = i1.value 
    if (num == 4) {
        out1.innerHTML = true
    } else {
        out1.innerHTML = false
    }
} */

// 2
/* const btn2 = document.querySelector('.b2')
btn2.onclick = function f2() {
    let a21 = 123
    let a22 = 10
    const out2 = document.querySelector('.out2')

    if (a21 > a22) {
        out2.innerHTML = a21
    } else {
        out2.innerHTML = a22
    }
} */

// 3
/* const btn3 = document.querySelector('.b3')
btn3.onclick = function f3() {
    let input1 = document.querySelector('.i-31')
    let input2 = document.querySelector('.i-32')
    const out3 = document.querySelector('.out3')
    let num1 = +input1.value 
    let num2 = +input2.value 
    if(num1 > num2) {
        out3.innerHTML = num1
    } else {
        out3.innerHTML = num2
    }

} */

// 4
/* const btn = document.querySelector('.b-4')
btn.onclick = function f4() {
    const out = document.querySelector('.out-4')
    let input = document.querySelector('.i-4')
    let num = +input.value
    
    if(num >= 18) {
        out.innerHTML = 1
    } else {
        out.innerHTML = 0
    }
} */

// 5
/* const btn = document.querySelector('.b-5')
btn.onclick = function f5() {
    const out = document.querySelector('.out-5')
    let input = document.querySelector('.i-5')
    let num = +input.value
    
    if(num < 0) {
        out.innerHTML = 'm'
    } else if(num == 0) {
        out.innerHTML = 0
    } else {
        out.innerHTML = 1
    }
} */

// 6
/* const btn = document.querySelector('.b-6')
btn.onclick = function f6() {
    const out = document.querySelector('.out-6')
    let input = document.querySelector('.i-6')
    let num = +input.value
    
    if(num % 2 == 0) {
        out.innerHTML = 'even'
    } else {
        out.innerHTML = 'odd'
    }
} */

// 7
/* const btn = document.querySelector('.b-7')
btn.onclick = function f7() {
    const out = document.querySelector('.out-7')
    let input1 = document.querySelector('.i-71')
    let input2 = document.querySelector('.i-72')
    let num1 = +input1.value
    let num2 = +input2.value
    out.innerHTML = Math.pow(num1, num2)
    
} */

// 8 
/* const btn = document.querySelector('.b-8')
btn.onclick = function f8() {
    const out = document.querySelector('.out-8')
    let select = document.querySelector('.s-8')
    let num = select.value

    switch(num) {
        case '1':
            out.innerHTML = 'one'
            break
        case '2':
            out.innerHTML = 'two'
            break
        case '3':
            out.innerHTML = 'three'
            break
    }
} */

// 9
/* const btn = document.querySelector('.b-9')
btn.onclick = function f9() {
    const out = document.querySelector('.out-9')
    let input = document.querySelector('.i-9')
    let num = +input.value

    if(num > 0 && num <= 32) {
        out.innerHTML = 1
    } else if(num >= 33 && num <= 43) {
        out.innerHTML = 2
    } else if(num >= 44 && num <=64) {
        out.innerHTML = 3
    } else {
        out.innerHTML = 0
    }
} */

// 10
/* const btn = document.querySelector('.b-10')
btn.onclick = function () {
    const out = document.querySelector('.out-10')
    let select = document.querySelector('.s-100')
    let num = +select.value

   out.innerHTML = num
} */

// 11
/* const select = document.querySelector('.s-110')

select.onchange = function () {
    const out = document.querySelector('.out-11')
    let num = +select.value

   out.innerHTML = num
} */

// 12
/* const btn = document.querySelector('.b-12')
btn.onclick = function () {
    const out = document.querySelector('.out-12')
    let input = document.querySelector('.i-120')
    let num = +input.value

   out.innerHTML = typeof num
} */

// 13
/* const btn = document.querySelector('.b-13')
btn.onclick = function () {
    const out = document.querySelector('.out-13')
    let input = document.querySelector('.i-130')
    let num = input.value

   out.innerHTML = typeof num
} */

// 14
/* const btn = document.querySelector('.b-14')
btn.onclick = function () {
    const out = document.querySelector('.out-14')
    let input1 = document.querySelector('.i-141')
    let input2 = document.querySelector('.i-142')
    let select = document.querySelector('.s-143')
    let num1 = +input1.value
    let num2 = +input2.value
    let operator = select.value

    switch(operator) {
        case '+':
            out.innerHTML = num1 + num2
            break;
        case '-':
            out.innerHTML = num1 - num2
            break;
        case '*':
            out.innerHTML = num1 * num2
            break;
        case '/':   
            out.innerHTML = num1 / num2
            break;
    }
} */

// 15
const btn = document.querySelector('.b-15')
btn.onclick = function () {
    const out = document.querySelector('.out-15')
    let select1 = document.querySelector('.s-151')
    let select2 = document.querySelector('.s-152')
    let select3 = document.querySelector('.s-153')
    let s1 = +select1.value
    let s2 = +select2.value
    let compare = select3.value 

    switch(compare) {
        case '&&':
            out.innerHTML = (s1 && s2)
            break;
        case '||':
            out.innerHTML = (s1 || s2) 
            break;
    }
    
}