"use strict";

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const positionStackAccessKey = '5c08a75fd58e93e01473622e4ef74fad';
//////////////////////////////

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
    // countriesContainer.style.opacity = 1; // moved to finally
}

function renderError(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    //countriesContainer.style.opacity = 1; // moved to finally
}

const request = fetch('https://restcountries.com/v2/name/portugal')
console.log(request);



const getCountryData = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`).then(
        response => {
            //NOTE, this api returns OK 200 whatever you send
            // so you cannot throw an error here
            return response.json();
        }
    ).then(data => {
        let neighbour;
        renderCountry(data[0]);
        console.log(data[0]);

        if(!data[0].borders) // borders is only included if there are some // pass Australia.
            throw new Error('No neighbour found!');
        else
        neighbour = data[0].borders[0];

        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    }).then(response =>
        response.json()
    ).then(data => {
        console.log(data);
        renderCountry(data, 'neighbour');
    }).catch(err => {
        console.error(`${err} 🧨🧨🧨 `);
        renderError(`
        Something went wrong 🧨🧨🧨 
        ${err.message}. Try again!`);
    }).finally(() =>
        countriesContainer.style.opacity = 1
    );

}


btn.addEventListener('click', e => {
    getCountryData('tuvalu'); // pass australia for actual created error.
});

// He refactors code here.

