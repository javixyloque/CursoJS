const notificarBtn = document.querySelector ('#notificar')

notificarBtn.addEventListener ('click', () => {
   Notification
      .requestPermission()
      .then ( resultado => {
         console.log ('dejaste que te mandaran notificaciones', resultado)
      })
      
})

const verNotificacion = document.querySelector ('#verNotificacion')

verNotificacion.addEventListener ('click', resultado => {
   if (Notification.permission == 'granted') {
      new Notification ('Aqui estoy en el coche sudando mogollón')
      Notification.icon = '/arriba.jpg'
   }
})