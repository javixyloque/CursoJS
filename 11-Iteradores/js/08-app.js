// const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS']

// for (let pendiente in pendientes) {
//    console.log(pendiente)
// }

const car = {
   model: 'Mustang',
   year: '2010',
   engine: 'v10'
}
// for (let property in car) {
//    console.log(`${car[property]}`)
// }

for (let [key,value] of Object.entries(car)) {
   console.log(value);
   console.log(key);
}