

const effective = 300
const credit = 400
const able = effective + credit
const totalPay = 600

if (effective > totalPay || credit > totalPay || able >= totalPay) {
   console.log ('You can pay')
} else {
   console.log ('Insufficent money')
}
