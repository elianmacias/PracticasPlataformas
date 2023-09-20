const express = require('express');
const cors = require('cors');
const conection = require('./bdatos/config');

const { PORT } = require('./confi');

class Server 
{
    constructor(){
        this.app = express();
        this.port = PORT;

        this.conectDB();
        this.middlewares();
        this.routes();
    }

    async conectDB(){
        await conection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/', require('./rutas/trans.rutas'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`This Server is running in: http://localhost:${this.port}/`);
        })
    }
}

module.exports = Server;

//