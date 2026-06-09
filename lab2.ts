interface Product {
    id: number;
    title: string;
    price: number;
    category: "Electronics" | "Fashion";
}

const myProduct: Product = {
    id: 1,
    title: "Mouse",
    price: 500,
    category: "Electronics",
};

function getProductInfo(product: Product): string {
return `Product: ${product.title}, Price: ${product.price}, Category: ${product.category}`;
}
console.log(getProductInfo(myProduct));