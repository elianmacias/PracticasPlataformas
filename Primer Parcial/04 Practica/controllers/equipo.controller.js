const { Equipo } = require("../models");


const GetEquipos = async (req, res) => {
    try {
        const equipo = await Equipo.find()
         .populate('idJugador') 

        res.status(200).json({
            msg: 'Equipo obtenido con éxito',
            equipo
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener Equipo '
        });
    }
}

const GetEquipo = async (req, res) => {
    try {
        const id = req.params.id
        let equipo = await Equipo.findById(id)
        res.status(200).json({
            msg: `Equipo por ${id} obtenido `,
            equipo
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener Equipo'
        });
    }
}


const SaveEquipo = async (req, res) => {
    try {
        
        const data = {
            ...req.body
        }
        
        const saveEquipo = await new Equipo(data);
        await saveEquipo.save();

        res.status(200).json({
            msg: 'Guardado con éxito Equipo',
            saveEquipo
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al guardar Equipo',
        });
    }

};


const EditEquipo = async (req, res) => {
    try {
        const id = req.params.id
        const equipo = await Equipo.findByIdAndUpdate(id, {...req.body})
        res.status(200).json({
            msg: 'Actualizado correctamente Equipo',
            equipo
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al actualizar Equipo'
        });
    }
}

const DeleteEquipo = async (req, res) => {
    try {
        const id = req.params.id
        await Equipo.findByIdAndDelete(id)
        res.status(200).json({
            msg: 'Eliminado correctamente Equipo',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al eliminar Equipo'
        });
    }
}



module.exports ={
    GetEquipos,
    GetEquipo,
    SaveEquipo,
    EditEquipo,
    DeleteEquipo
}




