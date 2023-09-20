require('dotenv').config();
const express = require('express')
const cors  =require('cors');

const app =  express();
app.use(cors()).use(express.json())
app.use('/public',  express.static(__dirname+'/public'))


let equipo = [];


app.get('/equipo', async (req, res) => {
    console.log('Usado API equipo');
    res.status(200).send(equipo);
      console.log('Se ha consultado equipo');
});

app.post('/equipo', async (req, res) => {
    console.log('Usando equipo');
    const {body} = req;

    equipo.push(body);

    res
        .status(201)
        .send({ message:'Guardado equipo', body});
        console.log("Guardado el equipo");
});

app.delete('/equipo/:id', async (req, res) => {
    console.log('Uso de Api  Equipo');
    const {id} =  req.params;
    equipo = equipo.filter(equipo => equipo.id !== id);
      res.status(200).send({ message: 'Ha sido eliminado el Equipo' });
      console.log('Ha sido eliminado el  Equipo');  
});




module.exports ={app, equipo}















