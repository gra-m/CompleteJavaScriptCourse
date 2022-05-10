// importing module
//import {addToCart, totalPrice as tp, totalQuantity} from './shoppingCart.js';


/*
import * as ShoppingCart from './shoppingCart.js';


console.log('Importing Module');
ShoppingCart.addToCart('Bread', 5);

console.log('variable names can be changed on import/export:',
    ShoppingCart.tp, ShoppingCart.tq);
*/

// Import default export (when there is only ONE thing being exported).



////////////////////////////////////////////////////////////
// DEFAULT IMPORT:
import add from './shoppingCart.js';

add ('pizza', 5);
add ('bread', 34);
add ('beer', 5);
