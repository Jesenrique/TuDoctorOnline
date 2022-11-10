const Paciente = require('../models/Paciente');


exports.consultarPacientes = async (req, res) => {
    try {
        //Producto.bulkSave()
        const pacientes = await Paciente.find();
        res.json(pacientes)



    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al consultar los datos");
    }

}

exports.buscarPacientes = async (req, res) => {

    try {
        const pacientes = await Paciente.find({ nombre: req.params.id });
        //res.json(productos)

        res.json(pacientes.map(function (elem) {
            // return  elem.launches+10;
            return (elem.nombre + "-" + elem.direccion);
        }));
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al consultar los datos");
    }

}

exports.GuardarPacientes = async (req, res) => {


    try {
        let paciente = new Paciente(req.body)
        const pacientes = await paciente.save();

        res.status(200).json(pacientes);
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al guardar los datos");
    }
}

exports.UpdatePaciente = async (req, res) => {
    try {

        const { n_documento, nombre, apellido, edad, correo, direccion, celular, enfermedad, peso } = req.body;
        let paciente = await Paciente.findById(req.params.id);
        if (!paciente) {
            res.status(404).json({ msg: 'el paciente no existe' });
        }
        paciente.n_documento = n_documento;
        paciente.nombre = nombre;
        paciente.apellido = apellido;
        paciente.edad = edad;
        paciente.correo = correo;
        paciente.direccion = direccion;
        paciente.celular = celular;
        paciente.enfermedad = enfermedad;
        paciente.peso = peso;

        const id = req.params.id;
        const Update = req.body;
        const option = { new: true };
        const pacientes = await Paciente.findByIdAndUpdate(id, paciente, option);

        res.json(pacientes);
    } catch (error) {
        console.log(error);
        res.status(400).send("hubo un error al guardar los datos");
    }
}

exports.DeletePaciente = async (req, res) => {
    try {

        let paciente = await Paciente.findById(req.params.id);
        if (!paciente) {
            res.status(404).json({ msg: "no existe el producto" });
        }

        await Paciente.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "el producto esta eliminado" });


    } catch (error) {
        console.log(error);
        res.status(400).send("hubo un error al borrar los datos");
    }

}