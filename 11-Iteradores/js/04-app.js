
let i = 1 // inicializar el while

while (i < 100) { //condición
   if (i % 15 === 0) {
      console.log (`${i} fizz buzz`)
   } else if ( i % 3 === 0){
   console.log(`${i} fizz`)
   } else if ( i % 5 === 0) {
      console.log (`${i} buzz`)
   } 
   i++ //incremento
}