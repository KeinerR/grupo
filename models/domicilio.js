const { time } = require("console");
const mongoose=require("mongoose");


const domicilioSchema = mongoose.Schema({
    IdDomicilio: {
        type: Number,
        unique: true,
        required: true,
    },
    IdPedido: {
        type: Number,
        
        required: true,
    },
    IdDomiciliario: {
        type: Number,
        
        required: true,
    },
    Observacion: {
        type: String,
        required: true,
    },
    FechaEntrega: {
        type: Date,
        required: true,
    },
    DireccionDomicilio: {
        type: String,
        required: true,
    },
    HoraEntrega: {
        type: String,
        required: true,
    },
    EstadoDomicilio: {
        type: String,
        enum: ['Realizado', 'Pendiente', 'Cancelado'],
        required: true,
    }
});

module.exports = mongoose.model('domicilio', domicilioSchema);
