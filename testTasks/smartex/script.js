// first
function addDelay() {
	return new Promise(resolve => setTimeout(resolve, 300))
}

async function logWithDelay(text) {
	await addDelay()
	console.log(text)
}

async function logArrayInfo(array) {
	// array.forEach(async item => {
	// 	await logWithDelay(item)
	// })
	// ПРИЧИНА: Так происходило потому что forEach не работает с await, forEach не ждет завершения асинхронных функций внутри себя
	for (let i = 0; i < array.length; i++) {
		const item = array[i]
		await logWithDelay(item)
	}
	console.log('Done!')
}

// logArrayInfo([1, 2, 3])

// CONSOLE
//----------
// "Done!"
// 1
// 2
// 3

// second
function createCats() {
	let cats = []
	// var i = 0
	// while (i < 10) {
	// 	let cat = function () {
	// 		console.log(`My index is ${i}`)
	// 	}

	// 	cats.push(cat)
	// 	i++
	// }
	// ПРИЧИНА: Я использовать let внутри цикла for это создаёт новую локальную переменную i для каждой итерации. Таким образом, каждая функция cat захватывает своё собственное значение i.

	for (let i = 0; i < 10; i++) {
		let cat = function () {
			console.log(`My index is ${i}`)
		}

		cats.push(cat)
	}

	return cats
}

let animals = createCats()

// animals[0]()
// animals[5]()

// CONSOLE
//----------
// "My index is 10"
// "My index is 10"

// third
const tree = {
	value: 3,
	children: [
		{
			value: 1,
			children: [],
		},
		{
			value: 4,
			children: [],
		},
		{
			value: 3,
			children: [
				{
					value: 8,
					children: [
						{
							value: 2,
							children: [],
						},
						{
							value: 5,
							children: [],
						},
					],
				},
				{
					value: 0,
					children: [],
				},
			],
		},
	],
}

function sumEvenValues(item) {
	let sum = 0

	if (item.value % 2 === 0) {
		sum += item.value
	}

	// C помощью рекурсии обходим всех детей
	for (let child of item.children) {
		sum += sumEvenValues(child)
	}

	return sum
}

const sum = sumEvenValues(tree)
console.log(sum) // 14
