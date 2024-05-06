const cardDiv = document.querySelector ('.card')

cardDiv.addEventListener ('click', (e) => {
   if (e.target.classList.contains('titulo')) {
      console.log  ('You clicked the title')
   }
   if (e.target.classList.contains ('precio')) {
      console.log ('You clicked the price')
   }
   if (e.target.classList.contains ('concierto')){
      console.log ('You clicked on the concert category')
   }
   if (e.target.classList.contains ('card')){
      console.log ('You clicked on the card')
   }
})