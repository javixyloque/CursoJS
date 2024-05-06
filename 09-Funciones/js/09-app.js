
const reproductor = {
   reproducir: function(id) {
      console.log (`Playing song number ${id}`)
   },
   pause: function () {
      console.log ('Stopping song...')
   },
   erase: function (id) {
      console.log (`Song number ${id} deleted`)
   },
   createPlaylist: function (name){
      console.log (`Creating ${name} playlist`)
   },
   playPlaylist: function (name) {
      console.log(`Currently playiing ${name}'s playlist`)
   }
}


reproductor.reproducir(30) 
reproductor.erase(30)
reproductor.createPlaylist('Funk')
reproductor.createPlaylist(`90's rock`)
reproductor.playPlaylist (`Ska`)