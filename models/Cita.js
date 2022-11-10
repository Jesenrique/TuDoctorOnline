const mongoose = require('mongoose');

// modelo debe ser igual al esquema de la base de datos 
const productoSchema = mongoose.Schema({
    id_paciente: {
        type: String,
        required: true
    },

    nombre_paciente: {
        type: String,
        required: true
    },
    medicamentos: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    lugar_cita:{
        type: String,
        required: true
    },
    fecha:{
        type: String,
        required: true
    },
    hora:{
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }

}, { versionKey: false });

module.exports = mongoose.model('citas', productoSchema);