"use strict";
/*
* Build Function script that renders a country based on
* being passed GPS coordinates.
*
* Part1:
* 1. Create a script function that takes (latitude, longitude).
* 2. Using https://geocode.xyz/api Complete reverse geocoding on
*  the provided coordinates turning  them into a meaningful location
*  like a city and a country name.
* The AJAX call will be done to a url with this format:
* https://geocode.xyz/52.508,13.381?geoit=json.
* Use the fetch API and promises to get the data.
* Do not use the getJson function from the last video.
* 3. Once you have data look at it in console and see all properties
* received. Use this data to log a message like this to the console:
* 'You are in Berlin, Germany'.
* 4. Chain a .catch to the end of the promise chain and log errors to
* the console.
* 5. You may only make 3 reqs per second to this API, if you reload
* fast you will get this error 403 that fetch will not reject, so
* create an error to reject this code 403 and display relevant message.
*
* Part2:
* 6. Render a country, take relevant attribute from the geocoding api
* and plug it into the countries API (go back and use the new API for this
* (v3).
* 7. Render the country and catch any errors, reuse code where
* possible.
*
* TEST COORDINATES: 52.508, 13.381 // 19.037, 72.873
* // -33.933, 18.474
*
* http://api.positionstack.com/v1/forward
    ? access_key = YOUR_ACCESS_KEY
    & query = 40.7638435,-73.9729691

// optional parameters:

    & limit = 10
    & output = json
    // more optional parameters available
*
*
*
* */
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

function whereAmI(latitude, logitude) {
    fetch(`http://api.positionstack.com/v1/reverse?access_key=${positionStackAccessKey}&query=${latitude},${logitude}&limit=1&output=json`)
        .then(response => {
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
    whereAmI(-33.933, 18.474);
    //whereAmI('-hello', 'there');
    //whereAmI(0, 0);
});

