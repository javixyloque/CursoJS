const product = { 
   name: '20 inches monitor',
   price: 300,
   availability: true
}

const measures = {
   weight: '1kg',
   longitude: '23cm'
}


console.log (product)
console.log (measures)

const result = Object.assign (product, measures)

// Spread operator (mucho más cómodo)
const result2 = {...product, ...measures}

console.log (result2)