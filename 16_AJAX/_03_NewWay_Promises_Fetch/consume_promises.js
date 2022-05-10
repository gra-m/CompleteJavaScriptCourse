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

function renderCountry(data) {
    const html =

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

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
}


//
const request = fetch('https://restcountries.com/v2/name/portugal')
console.log(request);

// .then is a function available to any promise, it takes a callback function with
// a parameter that is the outcome of the promise.
// .json is a function available to any response from a fetch function
// .json is also asynchronous and so returns another promise


const getCountryDataExplainCode = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`).then(
        function (response) {
            console.log(response);
            return response.json(); // return the promise from .json being called on response
        }
    ).then(function (data) {
        console.log(data);
        renderCountry(data[0])
    })
}

const getCountryDataArrowFunctions = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`).then(
       (response2) =>
            response2.json()
    ).then((data2) => {
        renderCountry(data2[0])
    })
}


getCountryDataExplainCode('portugal');
getCountryDataArrowFunctions('usa')
