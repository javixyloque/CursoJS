const cart = [
   {name: '27 inches monitor', price: 500},
   {name: 'Sony Xperia 7', price: 475},
   {name: 'Tempest keyboard', price: 29.95},
   {name: 'MSI GF66 Katana', price: 1278.95},
   {name: 'Ur mom gay', price: 888888},
   {name: 'Parakeet cage', price: 35.50}
]

for (let i = 0; i < cart.length; i++) {
   console.log(`${cart[i].name} costs ${cart[i].price}$`);
}

cart.forEach ( function (product){
   console.log(`${product.name} costs ${product.price}$`)
})