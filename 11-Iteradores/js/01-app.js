// for (let i = 0; i <= 200; i++) {
//    console.log (`Number: ${i}`)
// }

// for (let i = 0; i < 20; i++) {
//    if (i % 2 === 0) {
//       console.log (`El número ${i} es par`)
//    } else {
//       console.log (`El número ${i} es impar`)
//    }
// }

const cart = [
   {name: '27 inches monitor', price: 500},
   {name: 'Sony Xperia 7', price: 475},
   {name: 'Tempest keyboard', price: 29.95},
   {name: 'MSI GF66 Katana', price: 1278.95},
   {name: 'Ur mom gay', price: 888888},
   {name: 'Parakeet cage', price: 35.50}
]

console.log (cart.length)

for (let i = 0 ; i < cart.length; i++) {
   console.log (cart[i].name)
}