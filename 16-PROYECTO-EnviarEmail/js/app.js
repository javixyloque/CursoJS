document.addEventListener ('DOMContentLoaded', function() {
   
   const email = {
      email: '',
      asunto: '',
      mensaje: ''
}
   
console.log(email)

   // Seleccionar elementos de la interfaz
   const inputEmail = document.querySelector('#email');
   const inputAsunto = document.querySelector ('#asunto');
   const inputMensaje = document.querySelector ('#mensaje');
   const formulario = document.querySelector ('#formulario');

   // Asignar eventos
   inputEmail.addEventListener('blur', validar);
   inputAsunto.addEventListener ('blur', validar);
   inputMensaje.addEventListener ('blur', validar);

   // Validar datos dentro del formulario
   function validar (e) {
      
      if (e.target.value.trim () === '') {
         mostrarAlerta (`Es obligatorio rellenar el campo de ${e.target.id}!`, e.target.parentElement);
         return;
      }
      
      if (e.target.id === 'email' && !validarEmail(e.target.value)) {
         mostrarAlerta ('El email no es valido', e.target.parentElement)
         return;
      }

      limpiarAlerta (e.target.parentElement);

      email [e.target.name] = e.target.value.trim().toLowerCase()

      console.log (email)
   };

   function mostrarAlerta (mensaje, referencia) {
      limpiarAlerta (referencia);

      // Crear una alerta de error en HTML con JS
      const error = document.createElement('P');
      error.textContent = mensaje;
      error.classList.add ('bg-red-600', 'text-white', 'p-2', 'text-center');

      // Inyectar el error al formulario (en el lugar de la referencia {e.target.parentElement})
      referencia.appendChild (error);
      
   };

   function limpiarAlerta (referencia) {
      const alerta = referencia.querySelector ('.bg-red-600');
      if (alerta) {
         alerta.remove();
      };
   };

   function validarEmail (email) {
      const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
      const resultado = regex.test (email)
      console.log (resultado)
      return resultado;
   }
   
   function comprobarEmail () {
      console.log (e.target.value (email).includes ('') )
   }

});

