const Cita = require('../models/Cita');


exports.consultarCitas = async (req, res) => {
    try {
        //Producto.bulkSave()
        const citas = await Cita.find();
        res.json(citas)



    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al consultar los datos");
    }

}

exports.buscarCitas = async (req, res) => {

    try {
        const citas = await Cita.find({ nombre_paciente: req.params.id });
        //res.json(productos)

        res.json(citas.map(function (elem) {
            // return  elem.launches+10;
            return (elem.nombre_paciente + "-" + elem.medicamentos);
        }));
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al consultar los datos");
    }

}

exports.GuardarCitas = async (req, res) => {


    try {
        let cita = new Cita(req.body)
        const citas = await cita.save();

        res.status(200).json(citas);
    } catch (error) {
        console.log(error);
        res.status(500).send("hubo un error al guardar los datos");
    }
}

exports.UpdateCita = async (req, res) => {
    try {
        const { id_paciente, nombre_paciente, medicamentos, celular, correo, lugar_cita, fecha, hora, precio } = req.body;
        let cita = await Cita.findById(req.params.id);

        if (!cita) {
            res.status(404).json({ msg: 'la cita no existe' });
        }
        cita.id_paciente = id_paciente;
        cita.nombre_paciente = nombre_paciente;
        cita.medicamentos = medicamentos;
        cita.celular = celular;
        cita.correo = correo;
        cita.lugar_cita = lugar_cita;
        cita.fecha = fecha;
        cita.hora = hora;
        cita.precio = precio;

        const id = req.params.id;
        const Update = req.body;
        const option = { new: true };
        const citas = await Cita.findByIdAndUpdate(id, cita, option);
        res.json(citas);

    } catch (error) {
        console.log(error);
        res.status(400).send("hubo un error al guardar los datos");
    }
}

exports.DeleteCita = async (req, res) => {
    try {

        let cita = await Cita.findById(req.params.id);
        if (!cita) {
            res.status(404).json({ msg: "no existe el producto" });
        }

        await Producto.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "el producto esta eliminado" });


    } catch (error) {
        console.log(error);
        res.status(400).send("hubo un error al borrar los datos");
    }

}