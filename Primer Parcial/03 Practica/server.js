const {app} = require('./index');

const server = app.listen(process.env.PORT, ()=>{
  console.log(`API de EQUIPO DE FÚTBOL INICIADO CORRECTAMENTE`);
})


module.exports= server