"use strict";


////////////////////////////////

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const positionStackAccessKey = '5c08a75fd58e93e01473622e4ef74fad';

//////////////////////////////

function renderCountry(data, town, additionalClass = '') {

    const thisLanguageObject = data.languages;
    const thisCurrencyObject = data.currencies;
    const extraLine = (town === '') ? `` : `<h4 class="country__region">"You are in.</h4>`;

    let thisLanguage;

    for (const property in thisLanguageObject) {
        thisLanguage = thisLanguageObject[property]; // get first and only property.
        break;
    }

    console.log(thisLanguage);

    const currency = Object.keys(thisCurrencyObject)[0]; // get first property
    const symbol = thisCurrencyObject[currency].symbol;
    const fullCurrencyName = thisCurrencyObject[currency].name;

    console.log(currency, symbol, fullCurrencyName);

    const htmlArrayTypeAPI =
        `
        <article class="country ${additionalClass}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
          ${extraLine}
          <h3 class="country__name">${town}</h4>
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${thisLanguage}</p>
            <p class="country__row"><span>💰</span>${currency} ${symbol} ${fullCurrencyName}</p>
          </div>
        </article>
        `;

    countriesContainer.insertAdjacentHTML("beforeend", htmlArrayTypeAPI);
}

/////////////////

const renderError = function (errorMessage) {
    countriesContainer.insertAdjacentText('beforeend', errorMessage);
    countriesContainer.style.opacity = 1;
}

/////////////////


function getCountryInfo(data) {
    const country = data.country;
    const town = data.locality;

    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            [data] = data;
            console.log('Country Data: ', data);
            renderCountry(data, town);
            if (data.borders) {
                const firstNeighbour = data.borders[0];
                return fetch(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
            } else {
                console.log('error')
            }
        }).then(resp => resp.json())
        .then(data => {
            [data] = data;
            console.log('Neighbour:', data)
            renderCountry(data, '', 'neighbour');
        }).catch(err => renderError(`Error @ country info stage ${err.message}`))
        .finally(() => countriesContainer.style.opacity = 1);

}


function returnPStackError(status) {
    if (status === 422)
        return `[422 Unprocessable Entity] latitude and/or logitude entered in wrong format`;
    else
        return status;
}

const getPosition = function(){
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve,
            reject);
    })
}

function whereAmI() {
    getPosition().then(pos => {
        console.log(pos.coords);
        const {latitude, longitude} = pos.coords;
        return fetch(`http://api.positionstack.com/v1/reverse?access_key=${positionStackAccessKey}&query=${latitude},${longitude}&limit=1&output=json`);
    }).then(response => {
            // Check valid response:
            if (response.status === 200)
                console.log('Everything 200')
            else {
                console.log('Non 200 response', response);
                throw new Error(`@ response Error: ${returnPStackError(response.status)}`);
            }
            return response.json();
        })
        .then(data => {
            [data] = data.data;
            console.log('You are in ', data.locality, data.country);
            // Check valid place early abort second call
            if ((data.country) && (data.locality))
                getCountryInfo(data);
            else
                throw new Error('Coordinates not linked to known country/town pair.');
        }).catch(function (error) {
        renderError(`Error @ position stage ${error.message}`)
    })
}

btn.addEventListener('click', function (event) {
    whereAmI();
});

