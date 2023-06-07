const jokeElement = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
    jokeElement.innerHTML = '<img src="images//preloader.gif" alt="loading">'
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()

    jokeElement.textContent = data.joke
}

// USING .then()
// function generateJoke() {
//     jokeElement.textContent = 'loading'
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then((response) => response.json())
//         .then((data) => {
//             jokeElement.textContent = data.joke
//         })
// }
