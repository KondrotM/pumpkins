let quotesDiv = document.getElementById('kanyeQuotes');

fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
});

let videoButton = document.getElementById('give-video');

let on = 0;
videoButton.addEventListener('click', evt => {
    if (on) {
        on = 0;
        document.getElementById('vid').style.display = 'none';
        document.getElementById('give-video').innerHTML = 'Show video.'
    } else {
        on = 1;
        document.getElementById('give-video').innerHTML = 'Hide video.'
        document.getElementById('vid').style.display = 'flex';
    }
})

let catButton = document.getElementById('give-cat');

catButton.addEventListener('click', evt => {
    let catDiv = document.getElementById('cat-pic');

    fetch('https://api.thecatapi.com/v1/images/search?')
    .then(res => res.json())
    .then(cats => {
        cats.forEach(cat => {
            catDiv.innerHTML = `<div><h3>Here is a cat wishing you a good day</h3>
            </div><div class="image-holder"><img class="image" src="${cat.url}" alt="kitty" /></div>`
        });
    });
});

let dogButton = document.getElementById('give-dog');

dogButton.addEventListener('click', evt => {
    let dogDiv = document.getElementById('dog-pic');

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(dog => {
            dogDiv.innerHTML = `<div><h3>Here is a dog hoping to be your best friend</h3>
            </div><div class="image-holder"><img class="image" src="${dog.message}" alt="doggo"/></div>`
    });
});




let weatherForm = document.getElementById('weather-form')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let location = document.getElementById("weather-location").value;
    if (location == '') {
        document.getElementById('weatherError').style.display = 'block';
    } else {
        try {
        document.getElementById('weatherError').style.display = 'none';
        let weatherDiv = document.getElementById('div-weather');

        fetch(`http://api.weatherapi.com/v1/current.json?`+
        `key=147d86d61d864855ad1112255221508`+
        `&q=${location}&aqi=no`)
        .then(res => res.json())
        .then(weather => {
            console.log(weather.current);
            weatherDiv.innerHTML = `<h3>Weather in ${weather.location.name}, ${weather.location.country} ☁️</h3>${weather.current.temp_c} degrees celcius` +
            `<br>${weather.current.wind_mph} miles/h winds`
        }).catch(e => {
            console.error(e);
            document.getElementById('weatherError').style.display = 'block';
        })
        } catch (e) {
        }
        }
})



