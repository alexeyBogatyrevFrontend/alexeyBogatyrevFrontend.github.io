// https://api.openweathermap.org/data/2.5/weather

/* ?
lat=35
&
lon=139
&
appid={API key} */

function backWether() {
    document.querySelector('.weather__enterName').style.display = 'block'
    document.querySelector('.weather__selectName').style.display = 'block'
    document.querySelector('.weather__backBtn').style.display = 'none'
    document.querySelector('.weather__data').style.display = 'none'
    document.querySelector('.weather__enterName input').value = ''
}

document.querySelector('.weather__backBtn').onclick = backWether

function utcTimeConvert(data) {
    let unixTimestamp = data
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unixTimestamp * 1000);
    // Hours part from the timestamp
    let hours = '0' + date.getHours();
    // Minutes part from the timestamp
    let minutes = '0' + date.getMinutes();

    // Will display time in 10:30:23 format
    let formattedTime = hours.substr(-2) + ':' + minutes.substr(-2);     
    
    return formattedTime
}

function getWether() {
    let city = ''
    let input = document.querySelector('.weather__enterName input').value
    let select = document.querySelector('.weather__selectName select').value

    city = input || select

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=b1445e5c846cb4b3604aef5dd8cc20fa`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);

            if (data.message === 'city not found') {
                alert('Вы не правильно ввели название города или страны')
            } else {
                if (((input == data.name.toLowerCase()) || (input == data.name)) || select == data.name) {

                    document.querySelector('.weather__name').textContent = data.name
                    document.querySelector('.weather__country').textContent = data.sys.country
                    document.querySelector('.weather__degress').innerHTML = Math.round(data.main.temp - 273) + '&deg'
                    document.querySelector('.weather__clouds').textContent = data.weather[0]['description']
                    // https://openweathermap.org/img/wn/02d@2x.png
                    document.querySelector('.weather__feature').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
                    // timezone
                    const months = ["Января", "Февраля", "Мара", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
                    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
                    let offset = data.timezone / 60 / 6 / 10
                    let d = new Date();
                    let month = months[d.getMonth()];
                    let day = days[d.getDay()]
                    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
                    let nd = new Date(utc + (3600000 * offset));
                    let allData = nd.toString()
                    let currentTime = `${allData.split(' ')[4].split(':')[0]}:${allData.split(' ')[4].split(':')[1]}`
                    let currentDate = `${allData.split(' ')[2]} ${month} ${allData.split(' ')[3]}`
                    let currentDay = `${day}`
                    let sunrise = utcTimeConvert(data.sys.sunrise)
                    let sunset = utcTimeConvert(data.sys.sunset)
                    document.querySelector('.weather-time__current-time').innerHTML = currentTime
                    document.querySelector('.weather-time__current-date').innerHTML = currentDate
                    document.querySelector('.weather-time__current-day').innerHTML = currentDay
                    document.querySelector('.weather-time__current-sunrise').innerHTML = `Время рассвета: ${sunrise}`
                    document.querySelector('.weather-time__current-sunset').innerHTML = `Время заката: ${sunset}`




                    // show and hide blocks
                    document.querySelector('.weather__enterName').style.display = 'none'
                    document.querySelector('.weather__selectName').style.display = 'none'
                    document.querySelector('.weather__backBtn').style.display = 'block'
                    document.querySelector('.weather__data').style.display = 'flex'
                }
            }


        })
        .catch(function () {

        })
}

document.querySelector('.weather__btn').onclick = getWether

