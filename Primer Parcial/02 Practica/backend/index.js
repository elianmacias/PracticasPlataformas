const axios = require("axios").default;
const cron = require('node-cron');
const cheerio = require('cheerio');
const Server = require("./server");

const { Transaccion } = require('./modelos')

const server = new Server();

cron.schedule('*/2 * * * *', async ()=>{
    try{
        const sitio = await axios.get('http://localhost:8080');
        const $ = cheerio.load(sitio.data);
        const Tfilas =$('table tbody tr');
        let filas= [];

        Tfilas.each((index,fila)=>{
            let info = cheerio.load(fila);
            filas=[
                ...filas,
                {
                    "ID":info('.id').text(),
                    "NOMBRE":info('.nombre').text(),
                    "IDEN":info('.iden').text(),
                }
            ]
                
        })
        await Transaccion.create(filas);
    }catch(err){
        console.log(err);
        throw new Error('Error al ejecutar el cron job')
    }
});
server.listen();

//