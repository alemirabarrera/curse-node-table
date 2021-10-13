const { describe } = require("yargs");

const argv = require("yargs")
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar"
}).option("l",{
    alias: "listar",
    type: 'boolean',
    default: false,
    describe: "Muestra la tabla en colsola"
}).option("h",{
    alias: "hasta",
    type: 'number',
    default: 10,    
    describe: "Limite hasta donde quiere que multiplique"
})
.check( (argv, option)=>{
    if(isNaN(argv.b)){
        throw("la base debe ser un numero");
    }else if(isNaN(argv.h)){
        throw("el limite debe ser debe ser un numero");
    }
    else{            
      return  true;
    }    
})
.argv;


module.exports = argv;