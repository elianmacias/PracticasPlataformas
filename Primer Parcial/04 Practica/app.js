const express =require('express')
const cors = require('cors')

const { 
  
    JugadorRoute,
    EquipoRoute, 

  
} = require('./router')

const app = express();

app.use(express.static('public'));

app.use(cors())
app.use(express.json())



app.use('/api/jugador', JugadorRoute);
app.use('/api/equipo', EquipoRoute);



module.exports = app;