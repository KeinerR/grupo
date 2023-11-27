const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Usuario: {
        type: String,
        required: true,
    },
    Contraseña: {
        type: String,
        unique:true,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
