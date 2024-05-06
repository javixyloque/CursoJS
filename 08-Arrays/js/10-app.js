const cart = [
   {name: '27 inches monitor', price: 500},
   {name: 'Sony Xperia 7', price: 475},
   {name: 'Tempest keyboard', price: 29.95},
   {name: 'MSI GF66 Katana', price: 1278.95},
   {name: 'Ur mom gay', price: 888888},
   {name: 'Parakeet cage', price: 35.50}
]

const newArray = cart.map (function (product){
   return `${product.name} - Price: ${product.price}`;
})

const newArray2 = cart.forEach (function (product){
   return `${product.name} - Price: ${product.price}`
})

console.log (newArray)
console.log (newArray2)
// .map crea un nuevo arreglo y foreach no