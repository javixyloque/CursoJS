const cart = [];


// Definir un producto

const product = {
   name: '32 inches monitor',
   price: 300
}

const product2 = {
   name: '9 inches dildo',
   price: 23.45
}

const product3 = {
   name: 'Sköll beer x48',
   price: 34.20
}

let result;

result = [...cart, product]
result = [...result, product2]
result = [product3, ...result]

console.table(result)