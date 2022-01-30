const { crearArchivo } = require("./multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

// console.log(argv.base);
// console.log(argv.l);

// const [ , ,arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');


  crearArchivo(argv.b,argv.l,argv.h).then((resp) => console.log(resp) )
                  .catch((err) => console.log(`Algo no salio bien`) );

