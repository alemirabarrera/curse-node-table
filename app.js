const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require("./config/yargs")

console.clear();
console.log(argv);

console.log(argv.b);
console.log(argv.l);

crearArchivo(argv.b, argv.l, argv.h).then(nombreArchivo =>{
    console.log(nombreArchivo);
}).catch(err => console.log(err));