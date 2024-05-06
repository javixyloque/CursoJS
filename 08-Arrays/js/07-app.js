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

const product4 = {
   name: 'Ur mom gay',
   price: 5.80
}



cart.push (product)
cart.push (product2)
cart.push (product4)

// unshift para poner un elemento del array al principio

const product3 = {
   name: 'Sköll beer x48',
   price: 34.20
}


cart.unshift (product3)

console.table (cart)

// // Eliminar ultimo elemento del array
// cart.pop ()
// console.table (cart)

// // Eliminar primer elemento del array
// cart.shift ()
// console.table (cart)

cart.splice (1, 3)
console.table (cart)