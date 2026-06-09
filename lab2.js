"use strict";
const myProduct = {
    id: 1,
    title: "Mouse",
    price: 500,
    category: "Electronics",
};
function getProductInfo(product) {
    return `Product: ${product.title}, Price: ${product.price}, Category: ${product.category}`;
}
console.log(getProductInfo(myProduct));
