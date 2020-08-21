import mongoose, { Schema, mongo } from 'mongoose';

const productSchema = new Schema({
    code: {
        type: Number,
        maxlength: 50,
        unique: true,
        required: true
    },
    name: {
        type: String,
        maxlength: 50,
        unique: true,
        required: true
    },
    description: {
        type: String,
        maxlength: 255,
    },
    category: {
        type: Schema.Types.ObjectId, ref: 'Categorias'
    },
    stock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    saleprice: {
        type: Number
    },
    state: {
        type: Number,
        default: 1
    }
},
    {
        timestamps: true,
        collection: 'Productos'
    }
);

const Product = mongoose.model('Productos', productSchema);

export default Product;
