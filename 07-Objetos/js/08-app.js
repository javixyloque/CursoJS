'use strict'

let product = { 
   name: '20 inches monitor',
   price: 300,
   availability: true
}

Object.freeze (product)

//product.availability = false
//product.image = 'image.jgp'
//delete product.price

console.log (product)
console.log(Object.isFrozen(product))