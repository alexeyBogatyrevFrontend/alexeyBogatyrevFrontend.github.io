/* document.querySelector('.i-1').onkeypress = (event) => {
    // console.log(event);
    console.log(`keypress`);
    console.log(`charCode: ${event.charCode}`);
    console.log(`code: ${event.code}`);
    console.log(`key: ${event.key}`);
    console.log(`keyCode: ${event.keyCode}`);
}

document.querySelector('.i-1').onkeydown = (event) => {
    // console.log(event);
    console.log(`keydown`);
    console.log(`charCode: ${event.charCode}`);
    console.log(`code: ${event.code}`);
    console.log(`key: ${event.key}`);
    console.log(`keyCode: ${event.keyCode}`);

    if (event.key == 'CapsLock') {
        document.querySelector('.ch-1').checked = true
    } else {
        document.querySelector('.ch-1').checked = false
    }
}

document.querySelector('.i-1').onkeyup = (event) => {
    // console.log(event);
    console.log(`keyup`);
    console.log(`charCode: ${event.charCode}`);
    console.log(`code: ${event.code}`);
    console.log(`key: ${event.key}`);
    console.log(`keyCode: ${event.keyCode}`);
}

document.querySelector('.i-2').onkeypress = (event) => {
    // console.log(event);
    console.log(`keypress`);
    console.log(`charCode: ${event.charCode}`);
    console.log(`code: ${event.code}`);
    console.log(`key: ${event.key}`);
    console.log(`keyCode: ${event.keyCode}`);

    const a = {
        q: 'w',
        w: 'e'
    }

    document.querySelector('.i-2').value += a[event.key]
    return false
} */

// home work 


// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
    document.querySelector('.out-1').textContent += event.key
}
document.querySelector('.i-1').onkeypress = t1
// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2() {
    document.querySelector('.out-2').textContent += `${event.keyCode} `
}
document.querySelector('.i-2').onkeypress = t2

// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

function t3() {
    if ((event.keyCode >= 48) && (event.keyCode <= 59)) {
        document.querySelector('.out-3').textContent = false
    } else {
        document.querySelector('.out-3').textContent = true
    }
}
document.querySelector('.i-3').onkeypress = t3

// ваше событие здесь!!!


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
    document.querySelector('.out-4').innerHTML += event.key.toLowerCase()
}
document.querySelector('.i-4').onkeypress = t4

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
    document.querySelector('.out-5').innerHTML += event.key.toUpperCase()
}
document.querySelector('.i-5').onkeypress = t5
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6() {
    if (event.keyCode >= 65 && event.keyCode < 90) {
        document.querySelector('.out-6').innerHTML += event.key.toLowerCase()
    }
}
document.querySelector('.i-6').onkeypress = t6
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
    const a7 = [1, 'one', 2, 'two', 3, 'three', 4, 'four', 5, 'five', 6, 'six', 7, 'seven', 8, 'eight', 9, 'nine'];
    let random = Math.floor(Math.random() * a7.length)

    document.querySelector('.out-7').innerHTML += `${a7[random]} `
}
document.querySelector('.i-7').onkeypress = t7
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8() {
    console.log(event);
    if (event.keyCode === 105) {
        document.querySelector('.out-8').innerHTML += event.keyCode = 1
    } else if (event.keyCode === 111) {
        document.querySelector('.out-8').innerHTML += event.keyCode = 0
    } else if (event.keyCode === 73) {
        document.querySelector('.out-8').innerHTML += event.keyCode = 7
    } else {
        document.querySelector('.out-8').innerHTML += event.keyCode
    }
}
document.querySelector('.i-8').onkeypress = t8
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let count = 0
function t9() {
    console.log(event);
    if ((event.keyCode == 37) || (event.keyCode == 38) || (event.keyCode == 39) || (event.keyCode == 40)) {
        count++
        document.querySelector('.out-9').innerHTML = count
    }
}
document.querySelector('.i-9').onkeydown = t9
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let plusWidth = 64
function t10() {
    console.log(event);
    if (event.keyCode == 37 || event.keyCode == 39) {
        plusWidth++
        document.querySelector('.div-10 img').style.width = `${plusWidth}px`
    } else if (event.keyCode == 38 || event.keyCode == 40) {
        plusWidth--
        document.querySelector('.div-10 img').style.width = `${plusWidth}px`
    }
}
document.querySelector('.i-10').onkeydown = t10
// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11() {
    let current = document.querySelectorAll('.keyboard .block')
    let items = [[48, 49, 50, 51, 52, 53, 54, 55, 56, 57], [81, 87, 69, 82, 84, 89, 85, 73, 79, 80], ['ShiftLeft', 'ControlLeft', 'AltLeft', 'Space', 'Enter']]
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items[i].length; j++) {
            if ((event.keyCode == items[i][j]) || event.code === items[i][j]) {
                current.forEach(e => {
                    if (event.key == e.innerHTML || event.code == e.getAttribute('data-key')) {
                        e.classList.add('active')
                    } else {
                        e.classList.remove('active')
                    }
                })
            }
        }
    }
}
document.querySelector('.i-11').onkeydown = t11

// ваше событие здесь!!!

