// for (let i = 0; i <= 10; i++) {

//    if (i === 5){
     
//       console.log('This is the number 5')
//       continue
//    }
//    console.log (`Number: ${i}`)
// }

const cart = [
   {name: '27 inches monitor', price: 500},
   {name: 'Sony Xperia 7', price: 475},
   {name: 'Tempest keyboard', price: 29.95, discount: true},
   {name: 'MSI GF66 Katana', price: 1278.95},
   {name: 'Ur mom gay', price: 888888},
   {name: 'Parakeet cage', price: 35.50}
]



for (let i = 0; i < cart.length; i++ ){
   if (cart[i].discount){
      console.log(`${cart[i].name} has a discount today, congrats :)`) 
      continue
   }     console.log(cart[i].name)
}