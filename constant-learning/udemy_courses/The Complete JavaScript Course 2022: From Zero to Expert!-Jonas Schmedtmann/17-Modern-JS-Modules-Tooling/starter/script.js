// Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log('Importing Module');
// addToCart('bread, 5');
// console.log(price, tq);
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('orange', 1);
// console.log(price);

console.log(cart);
