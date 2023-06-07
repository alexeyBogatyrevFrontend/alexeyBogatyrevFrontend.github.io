const bg = document.querySelector('#background')
const password = document.querySelector('#password')

password.addEventListener('input', (e) => {
    let value = 20 - e.target.value.length * 2
    console.log(value)
    bg.style.filter = `blur(${value}px)`
})
