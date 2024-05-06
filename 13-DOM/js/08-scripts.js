const navegacion = document.querySelector('nav')

console.log (navegacion.firstElementChild)
// console.log (navegacion.childNodes) // Los espacios en blanco se consideran Nodos tambien (text)
// console.log (navegacion.children)

// console.log (navegacion.children[1].nodeName)
// console.log (navegacion.children[1].nodeType)

const card = document.querySelector ('.card')

// console.log (card.children[0])
// card.children[0] = 'img/arriba.jpg'

// Traversing de hijo a padre
// console.log (card.parentElement)


// console.log (card)
// console.log (card.nextElementSibling)
// console.log (card.nextElementSibling.nextElementSibling)

const ultimoCard = document.querySelector('.card:nth-child(4)')
console.log (ultimoCard.previousElementSibling)