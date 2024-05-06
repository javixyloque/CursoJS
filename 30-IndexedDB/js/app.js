let DB

document.addEventListener ('DOMContentLoaded', () =>{
   crmDB ()

   setTimeout(() => {
      crearCliente ()
   }, 5000);
})

function crmDB () {
   // Crear base de datos v 1.0
   let crmDB = window.indexedDB.open ('crm', 1.0)

   // Si hay un error
   crmDB.onerror = function () {
      console.log ('Error al cargar base de datos')
   }

   // Si se creó bien
   crmDB.onsuccess = function () {
      console.log ('Base de datos cargada correctamente')
   
      DB = crmDB.result;
   }

   // Configuracion de la base de datos
   crmDB.onupgradeneeded = function (e) {
      const db = e.target.result

      // Crear objectStore (permite crear columnas de la base de datos)
      const objectStore = db.createObjectStore ('crm', {
         keyPath: 'crm',
         autoIncrement: true
      })
   
   
      // CREAR LAS COLUMNAS //
      objectStore.createIndex ('name', 'name', {unique: false})
      objectStore.createIndex ('email', 'email', {unique: true})
      objectStore.createIndex ('phone', 'phone', {unique: false})
   
      console.log ('columnas creadas')

   }
}


function crearCliente () {
   let transaction = DB.transaction (['crm'], 'readwrite');

   transaction.oncomplete = function () {
      console.log ('transacccion completada')
   } 

   transaction.onerror = function () {
      console.log ('error en la transaccion')
   }

   const objectStore = transaction.objectStore ('crm')

   const nuevoCliente = {
      name: 'Chefas',
      email: 'tupu@tupu.com',
      phone: 696969696
   }

   const request = objectStore.add (nuevoCliente)
}






