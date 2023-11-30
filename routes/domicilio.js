const express = require('express');
const Domicilio = require('../models/domicilio');
const router = express.Router();

// Crear domicilio
router.post('/', (req, res) => {
    const domicilio = new Domicilio(req.body);
    domicilio
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener domicilio por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Domicilio
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar domicilio por ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Domicilio
        .findByIdAndDelete(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar domicilio por ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { IdPedido, IdDomiciliario, Observacion, FechaEntrega, DireccionDomicilio, HoraEntrega, EstadoDomicilio } = req.body;
    Domicilio
        .findByIdAndUpdate(id, { IdPedido, IdDomiciliario, Observacion, FechaEntrega, DireccionDomicilio, HoraEntrega, EstadoDomicilio }, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los registros de domicilio
router.get('/', (req, res) => {
    Domicilio.find() // Buscar todos los domicilios en la base de datos
        .then((data) => res.json(data)) // Enviar los registros como respuesta en formato JSON
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
