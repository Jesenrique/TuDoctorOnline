const Medico = require('../models/Medico');


exports.consultarMedicos = async (req, res) => {
    try {
        //Producto.bulkSave()
        const medicos = await Medico.find();
        res.json(medicos)
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al consultar profesionales");
    }

}

exports.buscarMedicos = async (req, res) => {
    try {
        const medicos = await Medico.find({ nombre: req.params.id });
        //res.json(productos)

        res.json(medicos.map(function (elem) {
            // return  elem.launches+10;
            return (elem.nombre + "-" + elem.direccion);
        }));
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error en la busqueda de los profesionales");
    }

}

exports.GuardarMedicos = async (req, res) => {
    try {
        let medico = new Medico(req.body)
        const medicos = await medico.save();
        res.status(200).json(medicos);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al guardar el profesional");
    }
}

exports.UpdateMedicos = async (req, res) => {
    try {
        const { nombre, documento, especialidad, disponibilidad, registro_profesional } = req.body;
        let medico = await Medico.findById(req.params.id);
        if (!medico) {
            res.status(404).json({ msg: 'el profesional no existe' });
        }
        medico.nombre = nombre;
        medico.documento=documento;
        medico.especialidad=especialidad;
        medico.registro_profesional=registro_profesional;

        const id = req.params.id;
        const Update = req.body;
        const option = { new: true };
        const medicos = await Medico.findByIdAndUpdate(id, medico, option);

        res.json(medicos);
    } catch (error) {
        console.log(error);
        res.status(400).send("hubo un error al actualizar los datos del profesional");
    }
}

exports.DeleteMedicos = async (req, res) => {
    try {
        let medico = await Medico.findById(req.params.id);
        if (!medico) {
            res.status(404).json({ msg: "no existe el profesional seleccionado" });
        }

        await Medico.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "el profesional ha sido eliminado" });

    } catch (error) {
        console.log(error);
        res.status(400).send("hubo un error al borrar el profesional seleccionado");
    }

}