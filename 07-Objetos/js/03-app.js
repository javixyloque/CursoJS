let product = { 
   name: '20 inches monitor',
   price: 300,
   availability: true
}

// Agregar nuevas propiedades al objeto

product.image = 'image.jpg'

delete product.availability

console.log(product)