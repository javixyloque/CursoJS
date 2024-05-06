'use strict'

let product = { 
   name: '20 inches monitor',
   price: 300,
   availability: true
}

// Seal permite cambiar propiedades, pero no añadir o eliminar, Freeze no permite nada
Object.seal (product)

product.availability = false
//product.image = 'image.jgp'
//delete product.price

console.log (product)
console.log(Object.isSealed(product))