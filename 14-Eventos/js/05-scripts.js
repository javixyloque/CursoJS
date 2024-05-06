window.addEventListener ('scroll', () => {
  


   const premium = document.querySelector ('.premium')
   const ubicacion = premium.getBoundingClientRect()
   if ( ubicacion.top < 100) {
      console.log ('The element is visible')
   } else if (ubicacion.bottom < 100) {
      console.log ('The element is visible')
   } else {
      console.log ('Sigue buscando champ')
   }
   
})