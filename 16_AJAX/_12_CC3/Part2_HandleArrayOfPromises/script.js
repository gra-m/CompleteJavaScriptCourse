"use strict";
/*
*1.Create async func 'loadAll' (...imgArr)
*
*2. .map array, loading each with 'createImage', resulting array
* == 'imgs'
*
*3. Print imgs to console.
*
* 4. Use Promise Combinator to get actual images from
* array
*
* 5. Add the 'parallel' class to all the images
*
* TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', img/img-3.jpg]
*/

const imageContainer = document.querySelector('.container');


const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', imgPath);
        // newImage.src = imgPath;
        newImage.addEventListener('load', e => {
            //imageContainer.insertAdjacentHTML('beforeend', newImage);
            imageContainer.append(newImage);
            resolve(newImage)
        });

        newImage.addEventListener('error', function () {
            reject(new Error('Image failed to load'));
        });
    });
}

const wait = seconds => {
    return new Promise(resolve =>
        setTimeout(resolve, seconds * 1000)
    )
}

/* Original: up to step 3. not async returns array of promises
const loadAll = function (imgArr) {
   return imgArr.map(value => createImage(value))
}

console.log(loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']));

*/

const loadAll = async function(imgArr) {
    try{
        const imgs = imgArr.map(async value => await createImage(value));
        const imgEls = await Promise.all(imgs);

        imgEls.forEach(img => img.classList.add('parallel'));
        console.log(imgEls);
    } catch(err){
        console.log(err);
    }
}


loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

