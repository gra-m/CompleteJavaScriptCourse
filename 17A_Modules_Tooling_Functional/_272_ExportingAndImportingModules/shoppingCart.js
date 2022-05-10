// Exporting module
console.log('Exporting Module');

const shippingCost = 10;
const cart = [];

const totalPrice = 237;
const totalQuantity = 40;

// named export of variables
export {totalPrice as tp, totalQuantity as tq};

// named exports have to be top-level code
export const addToCart = function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
    console.log('Cart is:', cart);
}
/////////////////////////////////////////////
// DEFAULT EXPORT:
export default function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
    console.log('Cart is:', cart);
}



