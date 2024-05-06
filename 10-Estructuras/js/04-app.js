const money = 200
const cost = 350
const card = true
const cheque = true

if (money >= cost) {
   console.log ('Puedes permitirte comprar')
} else if (card) {
   console.log ('No cash but can go with credit card')
} else if (cheque) {
   console.log ('Go to your closest bank to write a check')
} else {
   console.log ('No puedes permitirte pagar')
}

// Sólo se ejecuta la primera condición que se cumple