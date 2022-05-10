"use strict";

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//////////////////////////////

function renderCountry(data, className = '') {
    const htmlArrayTypeAPI =

        `
        <article class="country ${className}">
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
}

// Similar to CALLBACK HELL, heavy nesting

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// CALLBACK HELL, here with only one level of nesting, hard to maintain, nests of HttpRequests
// that are dependent on the call before them.
const getCountryAndNeighbour = function (country) {

    const request = new XMLHttpRequest();

    // Ajax call country 1;
    request.open('GET', `https://restcountries.com/v2/name/${country}`)
    request.send();

    request.addEventListener('load', function () {
        //const data = JSON.parse(this.responseText)[0]; // parse into js obj get first el.
        const [data] = JSON.parse(this.responseText); // parse and destructure.
        console.log(data);

        // render country 1
        renderCountry(data);

        // Get [first] neighbour
        //const neighbour = data.borders[0];
        const [neighbour] = data.borders;

        if(!neighbour) return; // Neighbour falsy === no borders

        else {
            const request2 = new XMLHttpRequest();
            // Ajax call country 2;
            request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)
            request2.send();

            request2.addEventListener('load',
                function () {
                    const data2 = JSON.parse(this.responseText); // parse and destructure.
                    console.log(data2);

                    // render country 1
                    renderCountry(data2, 'neighbour');
                })

            }

    })

}

getCountryAndNeighbour('usa');
//getCountryAndNeighbour('usa');
//getCountryAndNeighbour('united kingdom');
