
const reproductor = {
   song: '',
   reproducir: id => console.log (`Playing song number ${id}`),
   pause:  () => console.log ('Stopping song...'),
   erase: id => console.log (`Song number ${id} deleted`),
   createPlaylist: name => console.log (`Creating ${name} playlist`),
   playPlaylist: name => console.log(`Currently playing ${name}'s playlist`),

   set newSong (song) {
      this.song = (song);
      console.log (`Setting ${song}`);
   },

   get obtainSong () {
      console.log(`${this.song}`);
      
   },
   

}


reproductor.newSong = 'La Barbacoa'


reproductor.reproducir(30) 
reproductor.erase(30)
reproductor.createPlaylist('Funk')
reproductor.createPlaylist(`90's rock`)
reproductor.playPlaylist (`Ska`)
