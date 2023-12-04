const { Jugador } = require("../models");


const GetJugadors = async (req, res) => {
    try {
        const jugador = await Jugador.find()

        res.status(200).json({
            msg: 'Jugador obtenido con éxito',
            jugador
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener Jugador '
        });
    }
}

const GetJugador = async (req, res) => {
    try {
        const id = req.params.id
        let jugador = await Jugador.findById(id)
        res.status(200).json({
            msg: `Jugador por ${id} obtenido `,
            jugador
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener Jugador'
        });
    }
}


const SaveJugador = async (req, res) => {
    try {
        
        const data = {
            ...req.body
        }
        
        const saveJugador = await new Jugador(data);
        await saveJugador.save();

        res.status(200).json({
            msg: 'Guardado con éxito Jugador',
            saveJugador
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al guardar Jugador',
        });
    }

};


const EditJugador = async (req, res) => {
    try {
        const id = req.params.id
        const jugador = await Jugador.findByIdAndUpdate(id, {...req.body})
        res.status(200).json({
            msg: 'Actualizado correctamente Jugador',
            jugador
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al actualizar Jugador'
        });
    }
}

const DeleteJugador = async (req, res) => {
    try {
        const id = req.params.id
        await Jugador.findByIdAndDelete(id)
        res.status(200).json({
            msg: 'Eliminado correctamente Jugador',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al eliminar Jugador'
        });
    }
}



module.exports ={
    GetJugadors,
    GetJugador,
    SaveJugador,
    EditJugador,
    DeleteJugador
}




