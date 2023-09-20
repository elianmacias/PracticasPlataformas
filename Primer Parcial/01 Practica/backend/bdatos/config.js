const mongoose  =  require('mongoose');
const { MONGO_URL }=require('../confi')

const conection = async ()=>{
    try{
        await mongoose.connect( process.env.MONGO_URL);
        console.log('Base de datos escuchando')
    }
    catch(error){
        console.log(error);
        throw new Error('Error al conectarse con la base de datos')
    }
}
module.exports = conection
