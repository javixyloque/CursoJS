const product = { 
   name: '20 inches monitor',
   price: 300,
   availability: true,
   information: {
      measuring : {
         weight: '1kg',
      length: '1m'
      },
      incoming: {
         country: 'USA',
         state: 'Missouri',
         address: 'E Miller St 481'

      }
   }
}
console.log(product.information.incoming.address)

