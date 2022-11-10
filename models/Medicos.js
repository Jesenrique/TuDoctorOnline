const mongoose = require('mongoose');

// modelo debe ser igual al esquema de la base de datos 
const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    document: {
        type: String,
        required: true
    },

    especialidad: {
        type: String,
        required: true
    },
    disponibilidad: {
        type: String,
        required: true
    },
    registro_profesional: {
        type: String,
        required: true
    }
    
}, { versionKey: false });

module.exports = mongoose.model('medicos', productoSchema);