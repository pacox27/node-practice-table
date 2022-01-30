const fs = require("fs");
const colors = require("colors");

const crearArchivo = (base = 5,listar = false,limite=10) => {
    let consola = "";
    let salida = "===================================\n".green;
    salida += "Tabla de multiplicar del "+ colors.blue(base)+"\n";
    salida += "===================================\n".green;

    for(let i = 1;i <= limite; i++){
        salida += `${base} x ${i} = ${base * i} \n`;
    }

    // fs.writeFile('tabla_multiplicar.txt',salida, (err) => {
    //     if(err){
    //         throw err;
    //     }

    //     console.log(`Tabla de multiplicacion ${base} creado.`);
    // });

    if(listar){
        console.log("Salida del archivo: \n");
        console.log(salida);
    }else{
        console.log(`Tabla del ${base} creada con un limite de ${limite} iteraciones`);
    }
    
    return new Promise((resolve,reject) => {
        try{
            fs.writeFileSync(`./salida/tabla_multiplicacion_${base}.txt`,salida);
            resolve(`Tabla de multiplicacion ${base} creado.`);
        }catch(err){
            reject(err);
        }
    });

}

module.exports = {
    crearArchivo:crearArchivo
}
