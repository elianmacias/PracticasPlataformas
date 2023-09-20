const mongose = require("mongoose");
const {Schema} = mongose;

const TransaccionSche = new Schema(
    {
        ID:{
            type:String
        },
        NOMBRE:{
            type:String
        },
        IDENTICACION:{
            type:Number
        }
    }
);
module.exports = mongose.model('Transaccion', TransaccionSche);

//