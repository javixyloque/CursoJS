const nav = document.querySelector ('nav')

// Registrar un evento

nav.addEventListener ('mouseout', () => {
   console.log ('Exiting navigation')
   nav.style.backgroundColor = 'transparent'
})
nav.addEventListener ('mouseenter', () => {
   console.log ('Entering navigation')
   nav.style.backgroundColor = 'black'
})
nav.addEventListener ('click', () => {
   console.log ('Clicking navigation')
})

