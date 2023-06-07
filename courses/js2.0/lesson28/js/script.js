// function myAlert(message, myClass, out) {
//     let a = message
//     let b = `<p class="${myClass}">${a}</p>`
//     document.querySelector(out).innerHTML = b
// }
// myAlert('hello error', 'red', '.test')
// myAlert('hello', 'orange', '.test2')

// class Alert {
//     constructor(message, myClass, out) {
//         this.message = message
//         this.cssClass = myClass
//         this.outElement = out
//     }
//     showAlert() {
//         document.querySelector(this.outElement).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`
//     }
// }

// let m = new Alert('my message', 'purple', '.test')
// m.showAlert()

// let m2 = new Alert2('my message', 'purple', '.test', 'account_balance')
// m2.showIconAlert()
// m2.myAlert()



// home work
// 1 

let goods = new Goods('alex', 5, 'beatiful', 2)
// 2 

// 3

// 4

let goods2 = new Goods('mouse', 50, 'https://object.pscloud.io/cms/cms/Photo/img_0_89_752_1_1.jpg', 2, '.out-4')
goods2.draw()

// 5

// 6
let goods3 = new Goods2('mouse', 50, 'https://object.pscloud.io/cms/cms/Photo/img_0_89_752_1_1.jpg', 2, '.out-6', true)
goods3.draw()

// 7

// 8

let valid = new Valid('Tanya', 'tanya', false)
valid.validate()

// 9



// 10

// 11
let valid2 = new Valid2('', '', 'alexe22', '', false)
valid2.validate()
console.log(valid2);

// 12

let valid3 = new Valid2('', '', '', '', false)
valid3.validate()
console.log(valid3);
