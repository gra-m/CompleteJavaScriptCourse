"use strict";

const imageContainer = document.querySelector('.images');
let globalImage;

// region Promise Examples
/*

const getPositionLonghand = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            error => reject(error)
        )
    })
}

const lotteryPromise1 = new Promise((resolve, reject) => {
    console.log('2. Draw has gone to the server 🔮, awaiting response..')
    setTimeout(() => {
        if (Math.random() >= 0.5)
            resolve('2. You WIN 💰')
        else
            reject(new Error('2. You lost your money 😢 💩'))
    }, 10);
})

const wait = seconds => {
    return new Promise(resolve =>
        setTimeout(resolve, seconds * 1000)
    )
}

lotteryPromise1.then(res => console.log(res)).catch(error => console.log('whoops', error.message));
*/
// endregion
////////////////////SET NETWORK SLOWER TO SEE EFFECT

const wait = seconds => {
    return new Promise(resolve =>
        setTimeout(resolve, seconds * 1000)
    )
}

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

createImage('img/img-1.jpg')
    .then(resolve => {
        globalImage = resolve;
        return wait(2)
    })
    .then(() => {
        console.log(globalImage);
        globalImage.style.display = 'none';
        return createImage('img/img-2.jpg');
    })
    .then(img => {
        globalImage = img;
        return wait(2);
    }).then(() => {
    globalImage.style.display = 'none';
})
    .catch(error => imageContainer.insertAdjacentText('beforeend', error))
