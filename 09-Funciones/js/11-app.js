const learning = function (concept) {
   console.log (`Learning ${concept}`)
}
learning ('Javascript')

// ARROW FUNCTION, TE CORRES LA PAJA JAVIER
//SI TIENES MÁS DE 2 ELEMENTOS VARIABLES DE FUNCIÓN NECESITA ()
const learning2 = (concept) => `Learning ${concept}`

console.log(learning2('Javascript'))

const marks = (subject) => `The next course you will learn ${subject}`

console.log(marks('Maths'))