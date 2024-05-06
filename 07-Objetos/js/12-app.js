// Object literal
const product = { 
   name: '20 inches monitor',
   price: 300,
   availability: true,
}

// Object constructor -IMPORTANTISIMO JAVIER

function Product(name, price) {
   this.name = name;
   this.price = price;
   this.availability = true;
}

const product2 = new Product ('Monitor de 35 pulgadas fullHD', 486)

console.log (product)
console.log (product2)

const product3 = new Product ('Un dildo de 5 kilómetros', 5.8)
console.log(product3)