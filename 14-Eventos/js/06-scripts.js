// EVENT BUBBLING

const cardDiv = document.querySelector ('.card')
const infoDiv = document.querySelector ('.info')
const titulo = document.querySelector ('.titulo')

cardDiv.addEventListener ('click', (e) => {
   e.stopPropagation()
   console.log ('Click on card')
})

infoDiv.addEventListener ('click', (e) => {
   e.stopPropagation()
   console.log ('Click on info')
})

titulo.addEventListener ('click', (e) => {
   e.stopPropagation()
   console.log ('Click on titulo')
})