const user = false
const canPay = true

if (user && canPay) {
   console.log ('You can finish the purchase')
} else if (!canPay && !user) {
   console.log ('You need to log in and money')
} else if (!user) {
   console.log ('You have to log in')
} else if (!canPay) {
   console.log ('Revise your account to get money')
} 