function descargarCliente () {
   
   return new Promise ((resolve, reject) => {
      const error = false

   setTimeout(() => {
      if (!error) {
         resolve ('carga realizada completamente')
      } else {
         reject ('error en la conexion')
      }
   }, 3000);
   })

}

// Async await

async function ejecutar () {
   try {
      const respuesta = await descargarCliente();

      console.log (2+2)
      console.log (respuesta)
   } catch (error) {
      console.log (error)
   }
}
ejecutar()


// ASYNC VA EN LA FUNCION PADRE, AWAIT ESPERA A QUE EL ASYNC
// SE CUMPLA PARA QUE SE EJECUTE EL RESTO DEL CÓDIGO
// LO QUE ESTÁ ANTES QUE AWAIT SE EJECUTA NORMAL