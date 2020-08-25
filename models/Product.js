import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
    category: { type: Schema.Types.ObjectId, ref: 'category', required: true },
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
