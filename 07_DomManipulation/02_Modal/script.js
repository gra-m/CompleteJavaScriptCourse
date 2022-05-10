"use strict";

const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Function Expression has to be declared before use.
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// const openModal ...


// Anonymous function
for (const node of btnsOpenModal)
    node.addEventListener('click', function(){
        console.log('Button clicked')
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

// Real nice..
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Global events (keypresses are global) an event object is created with every event.
// here we ask JS to pass this event into our eventHandler function, we can only do this
// as we are not calling the function ourselves, JS is calling the anonymous function.

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();

});
