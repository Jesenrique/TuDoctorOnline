// se van asignar las rutas del modulo del producto

const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

// rutas crud
router.get('/', medicoController.consultarMedicos);

router.get('/:id', medicoController.buscarMedicos);

router.post('/', medicoController.GuardarMedicos);

router.put('/:id', medicoController.UpdateMedicos);

router.delete('/:id', medicoController.DeleteMedicos);

module.exports = router;