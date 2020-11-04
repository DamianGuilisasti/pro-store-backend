import mongoose , { Schema } from 'mongoose';

const categorySchema = new Schema({
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
    state: {
        type: Number,
        default: 1
    }
},
    {
        timestamps: true,
        collection: 'category'
    }
);

const category = mongoose.model('category', categorySchema);

export default category;