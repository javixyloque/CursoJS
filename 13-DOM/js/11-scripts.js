// Crear un menu pop-up
const btnFlotante = document.querySelector ('.btn-flotante')
const footer = document.querySelector ('.footer')

// Registrar un evento en el boton flotante
btnFlotante.addEventListener ('click', showHideFooter)

// AGREGAR Y QUITAR UNA CLASE DEL BOTON FLOTANTE AL CLICAR
function showHideFooter () {
   if (footer.classList.contains ('activo')) {
      footer.classList.remove ('activo')
      btnFlotante.classList.remove ('activo')
      btnFlotante.textContent = 'Idioma y Moneda'
   } else {
      footer.classList.add ('activo')
      btnFlotante.classList.add ('activo')
      btnFlotante.textContent = 'Cerrar';
   }
// btnFlotante puede ser sustituido por this, porque es lo que llama a la funcion

   console.log (footer.classList)
}