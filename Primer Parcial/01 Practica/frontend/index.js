const http = require("http");
const fs = require("fs");
const path = require("path");

const express = require("express");
const cors = require("cors");

const PUERTO = 8080;
const inicio = fs.readFileSync('./index.html');
const server = express();
server.use(cors()).use(express.json())
server.get('/', funcionx )

function funcionx (req, res){
    res.write(inicio);
    res.end();
}

server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`);
})

