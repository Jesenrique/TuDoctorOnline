const mongoose = require('mongoose');

// modelo debe ser igual al esquema de la base de datos 
const productoSchema = mongoose.Schema({
    n_documento: {
        type: String,
        required: true
    },

    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    enfermedad: {
        type: String,
        required: true
    },
    peso: {
        type: Number,
        required: true
    }

}, { versionKey: false });

module.exports = mongoose.model('pacientes', productoSchema);