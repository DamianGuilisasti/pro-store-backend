import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
    category: { type: Schema.Types.ObjectId, ref: 'category' },
    code: {
        type: Number,
        maxlength: 50,
        unique: true,

    },
    name: {
        type: String,
        maxlength: 50,
        unique: true,

    },
    description: {
        type: String,
        maxlength: 255,
    },
    stock: {
        type: Number,

    },
    price: {
        type: Number,

    },
    saleprice: {
        type: Number
    },
    primaryimage: {
        public_id: {
            type: String
        },
        imageURL: {
            type: String
        }
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
