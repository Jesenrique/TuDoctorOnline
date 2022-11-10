const Medicos = require('../models/Medicos');


exports.consultarMedicos = async (req, res) => {
    try {
        //Producto.bulkSave()
        const medicos = await Medicos.find();
        res.json(medicos)


    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al consultar los datos");
    }

}

exports.buscarMedicos = async (req, res) => {

    try {
        //const citas = await Cita.find({ nombre_paciente: req.params.id });
       // const citas = await Cita.findOne({ nombre_paciente: req.params.id });
        const medicos = await Medicos.findById(req.params.id);
        res.json(medicos);

       //res.json(citas.map(function (elem) {
            // return  elem.launches+10;
            //return (elem.nombre_paciente + "-" + elem.medicamentos);
        //}));


    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al consultar los datos");
    }

}

exports.GuardarMedicos = async (req, res) => {


    try {
        let medico = new Medicos(req.body)
        const medicos = await medico.save();

        res.status(200).json(medicos);
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al guardar los datos");
    }
}

exports.UpdateMedicos = async (req, res) => {
    try {
        const { nombre, documento, especialidad, disponibilidad, registro_profesional } = req.body;
        let medico = await Medicos.findById(req.params.id);

        if (!medico) {
            res.status(404).json({ msg: 'el medico no existe' });
        }
        medico.nombre = nombre;
        medico.documento = documento;
        medico.especialidad = especialidad;
        medico.disponibilidad = disponibilidad;
        medico.registro_profesional = registro_profesional;
              

        const id = req.params.id;
        const Update = req.body;
        const option = { new: true };
        const medicos = await Medicos.findByIdAndUpdate(id, medico, option);
        res.json(medicos);

    } catch (error) {
        console.log(error);
        res.status(400).send("hubo un error al guardar los datos");
    }
}

exports.DeleteMedicos = async (req, res) => {
    try {

        let medico = await Medicos.findById(req.params.id);
        if (!medico) {
            res.status(404).json({ msg: "no existe el medico" });
        }

        await Medicos.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "el medico esta eliminado" });


    } catch (error) {
        console.log(error);
        res.status(400).send("hubo un error al borrar los datos");
    }

}