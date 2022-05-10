"use strict";

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//////////////////////////////

/*
const getCountryDataArrayStyle = function (country) {

    const request = new XMLHttpRequest();

    request.open('GET', `https://restcountries.com/v2/name/${country}`)
    request.send();

    request.addEventListener('load', function () {
        //const data = JSON.parse(this.responseText)[0]; // parse into js obj get first el.
        const [data] = JSON.parse(this.responseText); // parse and destructure.
        console.log(data);





        const htmlArrayTypeAPI =

            `
        <article class="country">
          <img class="country__img" src=${data.flag} />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span> ${data.currencies[0].symbol} ${data.currencies[0].name}</p>
          </div>
        </article>
        `;

        countriesContainer.insertAdjacentHTML("beforeend", htmlArrayTypeAPI);
        countriesContainer.style.opacity = 1;
    })

}

getCountryDataArrayStyle('portugal');
getCountryDataArrayStyle('usa');
getCountryDataArrayStyle('united kingdom');
*/

///////////////////////

function renderCountry(data, additionalClass = '') {
    const html =
        `
        <article class="country ${additionalClass}">
          <img class="country__img" src=${data.flag} />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span> ${data.currencies[0].symbol} ${data.currencies[0].name}</p>
          </div>
        </article>
        `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
}


//
const request = fetch('https://restcountries.com/v2/name/portugal')
console.log(request);


const getCountryData = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`).then(
       (response) =>
            response.json()
    ).then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];
        if(!neighbour) return;
       // No '.then' in '.then' nesting. The next fetch is a returned from the first calls final
        // then
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    }).then(response =>
       response.json()
    ).then(data => {
        console.log(data);
        renderCountry(data, 'neighbour');
    })

}


//getCountryData('usa')
getCountryData('portugal');
