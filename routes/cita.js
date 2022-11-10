// se van asignar las rutas del modulo del producto

const express = require('express');
const router = express.Router();
const productoController = require('../controllers/citaController');

// rutas crud
router.get('/', productoController.consultarCitas);

router.get('/:id', productoController.buscarCitas);

router.post('/', productoController.GuardarCitas);

router.put('/:id', productoController.UpdateCita);

router.delete('/:id', productoController.DeleteCita);

module.exports = router;