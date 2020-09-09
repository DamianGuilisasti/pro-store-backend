import mongoose, { Schema } from 'mongoose';

const ingresoSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'Usuarios', required: true },
    person: { type: Schema.Types.ObjectId, ref: 'Personas', required: true },
    tipo_comprobante: {
        type: String,
        maxlength: 20,
        required: true
    },
    serie_comprobante: {
        type: String,
        maxlength: 7
    },
    num_comprobante: {
        type: String,
        maxlength: 20,
        required: true
    },
    impuesto: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    detalles: [{
        _id: {
            type: String,
            required: true
        },
        articulo: {
            type: String,
            required: true
        },
        cantidad: {
            type: Number,
            required: true
        },
        precio: {
            type: Number,
            required: true
        }
    }],
    state: {
        type: Number,
        default: 1
    }
},
    {
        timestamps: true,
        collection: 'Ingresos'
    }
);

const Ingresos = mongoose.model('Ingresos', ingresoSchema);
export default Ingresos;