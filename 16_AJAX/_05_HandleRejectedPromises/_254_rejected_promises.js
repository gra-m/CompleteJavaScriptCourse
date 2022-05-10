"use strict";

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// 1. Handle errors by passing a second parameter callback function to .then.
// 2. Handle errors with adding a catch to the end of the chain
// 3. catch returns a promise that 'finally' can be chained to
// end, always occurs.
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
        response => response.json()
        // 1.// ,err => alert(err)
    ).then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];
        if (!neighbour) return;
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    }).then(response =>
        response.json()
    ).then(data => {
        console.log(data);
        renderCountry(data, 'neighbour');
    }).catch(err => { // 2.
        console.error(`${err} 🧨🧨🧨 `);
        renderError(`
        Something went wrong 🧨🧨🧨 
        ${err.message}. Try again!`);
    }).finally(() =>
        countriesContainer.style.opacity = 1
    ); // 3.

}


// load page then in browser Network change to offline ===
// GET net::ERR_INTERNET_DISCONNECTED 200
// Uncaught (in promise) TypeError: Failed to fetch
// at getCountryData(254 rejected promises.js.32)
// at HTMLButtonElement.<anonymous> etc..
btn.addEventListener('click', e => {
    getCountryData('portugal');
});

