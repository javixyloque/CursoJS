// Switch case

const payMethod = 'effective'

switch (payMethod) {
   case 'effective':
      pay ()
      break;
   case 'cheque':
      console.log (`You paid with ${payMethod}`)
      break; 
   default: 
      console.log ("You didn't select a pay method yet or your method is not effective")
      break;
}

function pay () {
   console.log ('Pagando...')
}

