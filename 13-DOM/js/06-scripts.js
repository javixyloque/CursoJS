const encabezado = document.querySelector ('.contenido-hero h1').textContent
console.log (encabezado)
// console.log (encabezado.innerHTML) // Trae el HTML

// console.log (encabezado.innerText) // Si en el CSS está visibility: hidden, no lo detecta
// console.log (encabezado.textContent)

// document.querySelector ('.contenido-hero h1').textContent = 'Mi polla en tu cara'
// console.log (encabezado)


const imagen = document.querySelector('.card img')
console.log (imagen)
document.querySelector ('.titulo').textContent = 'Cuando creps que me ves'

document.querySelector ('.info .titulo').textContent = 'Chupate esa flanders'

const variables = document.querySelectorAll ('.info .titulo')
console.log (variables)


const titSegCard = document.querySelector('.card:nth-child(2) .titulo')
console.log (titSegCard)

const titThirdCard = document.querySelector('.card:nth-child(3) .titulo')
console.log (titThirdCard)
