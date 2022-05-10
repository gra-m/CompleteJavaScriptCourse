"use strict";
// Async / Await is syntactic sugar over consumption of promises,
// but it makes code much clearer. It was added ES2017

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const positionStackAccessKey = '5c08a75fd58e93e01473622e4ef74fad';

let position;

const getCoordinates = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            resolve,
            reject => reject(new Error('@getCoordinates: ' + reject.message)));
    })
}


function nameLocalityCountryAvailable(data) {
    if ((data.locality !== null) && (data.country !== null) && (data.name !== null))
        return 3;
    else if ((data.country !== null) && (data.name !== null))
        return 2;
    else if (data.country !== null)
        return 1;
    else
        return 0;
}


function getTownPlace(useableDataScore, position) {
    if (useableDataScore === 3)
        return position.name + ' ' + position.locality;
    else if (useableDataScore === 2)
        return position.name;
    else
        return 'unknown town/place'
}

const whereAmI = async function () {

    let useableDataScore = 0;
    //-33.933, 18.474

    // Get coordinates from browser
    const retrievedCoordinates = await getCoordinates();
    let {latitude: lat, longitude: long} = retrievedCoordinates.coords;

    // Get position info
    const pos = await fetch(`http://api.positionstack.com/v1/reverse?access_key=${positionStackAccessKey}&query=${lat},${long}&limit=1&output=json`);
    if (pos.ok === true) {
        position = await pos.json();
        [position] = position.data;
        useableDataScore = nameLocalityCountryAvailable(position);
    } else {
        throw new Error(`@pos ` + pos.status + ` ` + pos.statusText + ` ` + pos.url)
    }
    if (useableDataScore > 0) {
        const townPlace = getTownPlace(useableDataScore, position);
        const country = position.country;

        const countryDataResponse = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
        let countryData = await countryDataResponse.json();
        [countryData] = countryData;
        renderCountry(countryData, townPlace);

    } else {
        throw new Error('Country not returned with position data, country === ' + position.country)
    }

}

const renderError = function (errorMessage) {
    countriesContainer.insertAdjacentText('beforeend', errorMessage);
    countriesContainer.style.opacity = 1;
}

///////////////////////////////HERE! 266

try {
    console.log('ORIGINAL: Logs removed shows browser location flag')
    whereAmI();
} catch (error) {
    console.log('catch', error)
    renderError(error);
}


const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok)
            throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    });
}


// Promise.all combinator short circuits when one promise rejects.
const getThreeCountriesParallel = async function (c1, c2, c3) {
    try {
        const count123 = await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}?fullText=true`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}?fullText=true`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}?fullText=true`)
        ])
        console.log(count123.map(d => d[0].capital));
    } catch (err) {
        console.error(err);
    }
}

// Promise.race combinator short circuits whenever one of the promises gets settled.
const getFirstCountry = async function (c1, c2, c3) {
    try {
        const count1 = await Promise.race([
            getJSON(`https://restcountries.com/v3.1/name/${c1}?fullText=true`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}?fullText=true`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}?fullText=true`)
        ])
        console.log(count1);
        console.log(count1[0].capital, 'Won the race');
    } catch (err) {
        console.error(err);
    }
}

// Actual USE CASE race what you want against a timeout promise.
const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long!'));
        }, sec * 1000);
    })
}

// This is reached and fired up straight away, racing the values and outputting result or error.
console.log('PROMISE.RACE ->logs Dodoma')
Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/tanzania?fullText=true`),
    timeout(1) // adjust down to catch timeout error.
])
    .then(res => console.log(res[0].capital))
    .catch(err => console.log(err));

getThreeCountriesParallel('belgium', 'poland', 'Czech Republic');
getFirstCountry('belgium', 'poland', 'Czech Republic');

//////////////////////////////////////////////////////////////////////////////////
console.log('ALL.SETTLED-> returns array of promises')
Promise.allSettled([
    Promise.resolve('ALL.SETTLED.Success'),
    Promise.reject('ALL.SETTLED.ERROR'),
    Promise.resolve('ALL.SETTLED.ERROR.Another auto success')
]).then(res => console.log(res));

console.log('ALL -> shortcircuits on error and returns that if there is one')
Promise.all([
    Promise.resolve('ALL.Success'),
    Promise.reject('ALL.ERROR'),
    Promise.resolve('ALL.Another auto success')
]).then(res => console.log(res))
    .catch(error => console.error(error));

/////////////////////////////////////////////////////////////////////////////////

console.log('PROMISE.ANY->[ES 2021] returns first fulfilled does not shortcircuit on reject,' +
    ' does not return reject unless all reject.')
Promise.any([
    Promise.resolve('ANY.Success'),
    Promise.reject('ANY.ERROR'),
    Promise.resolve('ANY.Another auto success')
]).then(res => console.log(res))
    .catch(error => console.error(error));

////////////////////////////////////////////////////////////////////////////////


function renderCountry(data, town, additionalClass = '') {

    // if the coords are for a specific, known landmark, language and currency data may
    // be missing.
    const thisLanguageObject = data.languages;
    const thisCurrencyObject = data.currencies;
    const extraLine = (town === '') ? `` : `<h4 class="country__region">"You are in/at</h4>`;

    let thisLanguage;

    for (const property in thisLanguageObject) {
        thisLanguage = thisLanguageObject[property]; // get first and only property.
        break;
    }

    const currency = Object.keys(thisCurrencyObject)[0]; // get first property
    const symbol = thisCurrencyObject[currency].symbol;
    const fullCurrencyName = thisCurrencyObject[currency].name;

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
    countriesContainer.style.opacity = 1;
}
