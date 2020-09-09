import mongoose, { Schema } from 'mongoose';

const personSchema = new Schema({
    personType: {
        type: String,
        enum: ['Proveedor', 'Cliente'],
        required: true
    },
    name: {
        type: String,
        maxlength: 50,
        required: true
    },
    address: {
        type: String,
        maxlength: 70
    },
    phone: {
        type: Number,
        maxlength: 20
    },
    email: {
        type: String,
        maxlength: 50,
        unique: true
    },
    state: {
        type: Number,
        default: 1
    }

},
    {
        timestamps: true,
        collection: 'Personas'
    }
);

const Person = mongoose.model('Personas', personSchema);
export default Person;