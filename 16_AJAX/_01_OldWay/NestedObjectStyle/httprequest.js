"use strict";

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//////////////////////////////

const getCountryDataNestedObjStyle = function (country) {

    const request = new XMLHttpRequest();

    request.open('GET', `https://restcountries.com/v3.1/name/${country}?fullText=true`)
    request.send();

    request.addEventListener('load', function () {
        //const data = JSON.parse(this.responseText)[0]; // parse into js obj get first el.
        const [data] = JSON.parse(this.responseText); // parse and destructure.
        console.log(data);

        // region NESTED OBJECT API PROBLEM SOLVED
        // todo ~Solved old issue I had~ DIGGING IN TO RETRIEVED OBJECTS with dynamic property names

        const thisLanguageObject = data.languages;
        const thisCurrencyObject = data.currencies;

        let thisLanguage;

        // property is dynamically linked to the country so loop to get first (and only property
        // name)
        for (const property in thisLanguageObject) {
            thisLanguage = thisLanguageObject[property];
        }

        console.log(thisLanguage);

        // alternative => this loops through the properties too
        const currency = Object.keys(thisCurrencyObject)[0];
        const symbol = thisCurrencyObject[currency].symbol;
        const fullCurrencyName = thisCurrencyObject[currency].name;

        console.log(currency, symbol, fullCurrencyName);

/*useful:
https://www.samanthaming.com/tidbits/37-dynamic-property-name-with-es6/
1. Dot notation
me.name; // samantha

2. Bracket notation (string key)
me['name']; // samantha

3. Bracket notation (variable key)
let key = 'name';
me[key]; // samantha
*/

// endregion


        const htmlArrayTypeAPI =

            `
        <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
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
    })

}

getCountryDataNestedObjStyle('portugal');
getCountryDataNestedObjStyle('united states');
getCountryDataNestedObjStyle('united kingdom');
