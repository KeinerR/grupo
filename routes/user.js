const express = require('express');
const User = require("../models/user");
const router = express.Router();

// Crear usuario
router.post("/", (req, res) => {
    const { Usuario, Contraseña } = req.body;
    const newUser = new User({ Usuario, Contraseña });
    newUser
        .save()
        .then((data) => res.status(201).json(data)) // Cambiado a 201 para indicar creación exitosa
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Obtener usuario por ID
router.get("/:id", (req, res) => {
    const { id } = req.params;
    User
        .findById(id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.json(data);
        })
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Eliminar usuario por ID
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    User
        .findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.json(data);
        })
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Actualizar usuario por ID
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { Usuario, Contraseña } = req.body;
    User
        .findByIdAndUpdate(id, { Usuario, Contraseña }, { new: true })
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.json(data);
        })
        .catch((error) => res.status(500).json({ message: error.message }));
});

module.exports = router;
