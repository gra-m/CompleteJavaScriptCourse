"use strict";
// Async / Await is syntactic sugar over consumption of promises,
// but it makes code much clearer. It was added ES2017

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const positionStackAccessKey = '5c08a75fd58e93e01473622e4ef74fad';

let position;

const getCoordinates = function(){
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            resolve,
            reject => reject(new Error('@getCoordinates: ' + reject.message)));
    })
}


function nameLocalityCountryAvailable(data) {
   if((data.locality !== null) && (data.country !== null) && (data.name !== null))
       return 3;
   else if((data.country !== null) && (data.name !== null))
       return 2;
   else if(data.country !== null)
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

const whereAmI = async function() {

    let useableDataScore = 0;
    //-33.933, 18.474

    // Get coordinates from browser
    console.log('here')
    const retrievedCoordinates = await getCoordinates();
    let {latitude:lat, longitude:long} = retrievedCoordinates.coords;
    // for specific area
    lat = -33.9;
    long = 18.4;
    // to throw a 422
    //lat = 'wigwam';
    //long = 'sdf';

    // Get position info
    const pos = await fetch(`http://api.positionstack.com/v1/reverse?access_key=${positionStackAccessKey}&query=${lat},${long}&limit=1&output=json`);
    console.log('this is pos', pos);
    if(pos.ok === true) {
        position = await pos.json();
        [position] = position.data;
        console.log('this is position', position);
        useableDataScore = nameLocalityCountryAvailable(position);
    }
    else {
        throw new Error(`@pos ` + pos.status + ` ` + pos.statusText + ` ` + pos.url)
    }
    if(useableDataScore > 0) {
        const townPlace = getTownPlace(useableDataScore, position);
        const country = position.country;

        const countryDataResponse = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
        let countryData = await countryDataResponse.json();
        [countryData] = countryData;
        console.log(countryData);
        renderCountry(countryData, townPlace);

    }
    else {
        throw new Error('Country not returned with position data, country === ' + position.country)
    }

}

const renderError = function (errorMessage) {
    countriesContainer.insertAdjacentText('beforeend', errorMessage);
    countriesContainer.style.opacity = 1;
}


///////////////////////TRY CATCH he puts try in the function
console.log('FIRST');
try {
    whereAmI();
} catch(error) {
    console.log('catch', error)
    renderError(error);
}



function renderCountry(data, town, additionalClass = '') {

    console.log(town);
    console.log(data);

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
    countriesContainer.style.opacity = 1;
}
