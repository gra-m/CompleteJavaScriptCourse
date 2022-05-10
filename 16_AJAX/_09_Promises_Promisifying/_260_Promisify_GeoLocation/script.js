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

const getPositionLonghand = function(){
    return new Promise(function (resolve, reject) {
       navigator.geolocation.getCurrentPosition(
           position => resolve(position),
           error => reject(error)

       )
    })
}

const getPosition = function(){
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve,
            reject);
    })
}





// button activated version with functions throughout.
btn.addEventListener('click', function (event) {
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position) ;
    }, function(error) {
        console.log(error);
    })
    getPosition().then(pos => console.log('called again', pos));
});

