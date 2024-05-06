const product = { 
   name: '20 inches monitor',
   price: 300,
   availability: true
}

// Object destructuring
const { name } = product
console.log (name)

// DESTRUCTURING ARRAYS
const numbers = [10, 20, 30, 40, 50];

const [first, ...third] = numbers

console.log (third)

// Spread operator agrupa todas las variables restantes en el mismo arreglo
