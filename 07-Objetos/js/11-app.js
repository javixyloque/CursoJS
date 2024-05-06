

const product = { 
   name: '20 inches monitor',
   price: 300,
   availability: true,
   showInfo: function() {
      console.log(`The product ${this.name} costs ${this.price}`)
   }
}

const product2 = { 
   name: 'Apple Pad',
   price: 900,
   availability: true,
   showInfo: function() {
      console.log(`The product ${this.name} costs ${this.price}`)
   }
}


product.showInfo()
product2.showInfo()