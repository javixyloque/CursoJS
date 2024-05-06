function sumar ( a, b){
   return a + b;
}
const result = sumar (2, 3)

console.log (result)


// Ejemplo más avanzado

let total = 0
function addCart (price) {
   return total += price
}
function calculateTaxes (total) {
   return total * 1.21
}

total = addCart(200)
total = addCart(300)
total = addCart(300)

const totalCost = calculateTaxes(total)

console.log (`The amount is ${totalCost}`)
console.log(total)