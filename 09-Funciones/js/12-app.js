const cart = [
   {name: '27 inches monitor', price: 500},
   {name: 'Sony Xperia 7', price: 475},
   {name: 'Tempest keyboard', price: 29.95},
   {name: 'MSI GF66 Katana', price: 1278.95},
   {name: 'Ur mom gay', price: 888888},
   {name: 'Parakeet cage', price: 35.50}
]

const newArray = cart.map ( product => `${product.name} - Price: ${product.price}`)

cart.forEach ( product => console.log(`${product.name} - Price: ${product.price}`))

console.log (newArray)

