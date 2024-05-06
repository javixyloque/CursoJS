// VARIABLES
const carrito = document.querySelector ('#carrito');
const listaCursos = document.querySelector ('#lista-cursos');
const listaCarrito = document.querySelector ('#lista-carrito tbody');
const addButton = document.querySelector ('#agregar-carrito');
const vaciarCarrito = document.querySelector ('#vaciar-carrito');
let articulosCarrito = [];


// EVENT LISTENERS
cargarEventos ();
function cargarEventos () {
   // Para agregar un curso
   listaCursos.addEventListener ('click', agregarCurso);

   // Elimina cursos del carrito
   carrito.addEventListener ('click', eliminarCurso)
  
   // Vaciar carrito completo
   vaciarCarrito.addEventListener ('click', () => {
      articulosCarrito = []
      carritoHTML() // Eliminamos todo el HTML, se podria llamar a limpiarHTML también
   })
}

// FUNCIONES
// Aqui el click se convierte en E (IMPORTANTE)
function agregarCurso (e) {
   e.preventDefault();
   if (e.target.classList.contains ('agregar-carrito')){
      const curso = e.target.parentElement.parentElement; 
      leerCurso (curso);
   }
   
}

// Elimina datos del curso
function eliminarCurso (e) {
   e.preventDefault()
   if (e.target.classList.contains ('borrar-curso')) {
      const cursoId = e.target.getAttribute('data-id')

      // Eliminar con filter de articulosCarrito por el data-id
      articulosCarrito = articulosCarrito.filter (curso => curso.id !== cursoId);
      carritoHTML (); // Iteramos sobre el carrito para mostrar su html
   }

}

// Lee el contenido de lo clicado (curso = cursoSeleccionado) y extrae sus datos
function leerCurso (curso) {
   // console.log (curso)

   // Crear objeto con datos del curso seleccionado
   const infoCurso = {
      imagen: curso.querySelector ('img').src,
      titulo: curso.querySelector ('h4').textContent,
      precio: curso.querySelector ('.precio span').textContent,
      id: curso.querySelector ('a').getAttribute ('data-id'),
      cantidad: 1
   }
   
   // Revisa si el curso que vamos a agregar está repetido
   const existe = articulosCarrito.some ( curso => curso.id === infoCurso.id)
   if (existe) {
      // Actualizamos la cantidad
      const cursos = articulosCarrito.map (curso =>{
         if (curso.id === infoCurso.id) {
            curso.cantidad++
            return curso
         } else {
            return curso
         }
      })
      articulosCarrito = [...cursos]
   } else {
      articulosCarrito = [...articulosCarrito, infoCurso]
   }
   carritoHTML ()
}

// Mostrar el carrito de compras en el HTML
function carritoHTML () {

   //Limpiar el HTML
   limpiarHTML()
   
   //Recorre el carrito y genera el HTML
   const row = document.createElement ('tr');

   
   articulosCarrito.forEach ((curso) => {
      console.log (curso)
      const {imagen, titulo, precio, cantidad, id} = curso
      row.innerHTML = `
      <td>
      <img src='${imagen}'> </img> </td>
      <td> ${titulo} </td>
      <td> ${precio} </td>
      <td> ${cantidad} </td>
      <td> <a href='#' class='borrar-curso' data-id='${id}'> X </a> </td>
      `  
   })

   listaCarrito.appendChild (row)
}



// ELIMINA LOS CURSOS DEL TBODY
function limpiarHTML () {
   // FORMA LENTA
   // listaCarrito.innerHTML = '';

   while (listaCarrito.firstChild) {
      listaCarrito.removeChild (listaCarrito.firstChild)
   }
   
}



