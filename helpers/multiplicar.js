const fs = require('fs');
const colors = require('colors');


/*
const crearArchivo = (base=5)=>{ 
    return new Promise((resolve, reject)=>{
        let salida = "";
        for(let x=1; x <= 10; x++){     
            let result = base*x;
            salida += `${x} x ${base} = ${result}\n`;
        }            
        try {
            fs.writeFileSync( `tabla-del-${base}`,salida);
            resolve(`tabla-del-${base} creada!`);
        } catch (error) {
            reject(error);
        }        
    })
    
   
}
*/
const crearArchivo =async (base=5, listar, hasta)=>{     
        let salida="",consola = "";
        for(let x=1; x <= hasta; x++){     
            let result = base*x;
            salida += `${x} x ${base} = ${result}\n`;       
            consola+= `${colors.blue(x)} x ${colors.blue(base)} ${"=".green} ${colors.green(result)}\n`;       
            
        }            
        if(listar){
            console.log(consola.underline.red);   
        }
        try {         
            fs.writeFileSync( `./salida/tabla-del-${base}`,salida);            
            return  (`tabla-del-${base} creada!`.rainbow);
        } catch (error) {
            throw (error);
        }            
       
}



module.exports = {
    crearArchivo
};