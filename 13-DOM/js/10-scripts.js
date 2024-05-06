const enlace = document.createElement('a')


// Agregando texto
enlace.textContent = 'Nuevo enlace'

// Añadiendo href (enlace)
enlace.href = '/nuevo-enlace'

console.log (enlace)

enlace.target = '_blank'

enlace.setAttribute ('data-link', 'nuevo-enlace')

enlace.classList.add ('nueva-clase')

enlace.onclick = miFuncion

function miFuncion () {
   alert ('You are disturbing the page')
}

// Seleccionar la navegacion (donde queremos que se muestre el enlace)
const navegacion = document.querySelector ('nav')
// navegacion.appendChild (enlace)
// console.log (navegacion.children)
navegacion.insertBefore (enlace, navegacion.children[1])


   // CREAR UN CARD //
const parrafo1 = document.createElement ('p')
parrafo1.textContent = 'concierto'
parrafo1.classList.add('categoria', 'concierto')
parrafo1.textContent.toUpperCase

const parrafo2 = document.createElement ('p')
parrafo2.textContent = 'Blues en Nueva Jersey'
parrafo2.classList.add ('titulo')


const parrafo3 = document.createElement ('p')
parrafo3.textContent = '$250 por persona'
parrafo3.classList.add('precio')

// Crear div con la clase de info
const informacion = document.createElement ('div')
informacion.classList.add ('info')
informacion.appendChild (parrafo1)
informacion.appendChild (parrafo2)
informacion.appendChild (parrafo3)

// Crear una imagen
const imagen = document.createElement ('img')
imagen.src = 'img/rasputin.jpg'
imagen.classList.add ('img-fluid')

// Crear CARD
const card = document.createElement ('div')
card.classList.add ('card')

card.appendChild (imagen)
card.appendChild (informacion)

// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild (card)


console.log (card)