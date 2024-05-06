const busqueda = document.querySelector ('.busqueda')

busqueda.addEventListener ('input', (event) => {
   if (event.target.value === '') {
      console.log('Me comes el pito, escribe algo, melón')
   }
   
   console.log (event.target.value)

})