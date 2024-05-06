let data1 = 20
let data2 = '20'
let data3 = 30

// Revisar si 2 numeros son iguales
console.log (data1 == data3)
console.log (data1 == data2)

// Comparador estricto (también comprueba el tipo de dato)
console.log (data1 === parseFloat(data2))
console.log (typeof(data1))
console.log (typeof(data2))

// Diferentes (como una pregunta tambien)
// También tiene comparador estricto
let password1 = 'admin'
let password2 = 'Admin'

console.log (password1 != password2)
console.log (data1 != data2)
console.log (data1 !== data2)
console.log (data1 !== parseInt(data2))

