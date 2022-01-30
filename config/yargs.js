const argv = require('yargs').option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Es la base de la tabla de multiplicar'
})
.option('h',{
    alias:'hasta',
    type:'number',
    demandOption:false,
    describe:'Hasta donde va a llegar la table',
    default:10
})
.option('l',{
    alias:'listar',
    type:'boolean',
    default:false,
    describe:'Mostrar la tabla generada en consola'
})
.check( (argv,options) => {
    if( isNaN(argv.b) ){
        throw 'La base debe de ser un numero'
    }
    if( isNaN(argv.h) ){
        throw 'El limite de la tabla debe de ser un numero chavo'
    }
    return true;
})
.argv;

module.exports = argv;