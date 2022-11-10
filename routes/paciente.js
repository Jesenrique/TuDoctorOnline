// se van asignar las rutas del modulo del producto

const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

// rutas crud
router.get('/', pacienteController.consultarPacientes);

router.get('/:id', pacienteController.buscarPacientes);

router.post('/', pacienteController.GuardarPacientes);

router.put('/:id', pacienteController.UpdatePaciente);

router.delete('/:id', pacienteController.DeletePaciente);

module.exports = router;