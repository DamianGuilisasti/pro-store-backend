import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    userrole: {
        type: String,
        maxlength: 30,
        required: true
    },
    username: {
        type: String,
        maxlength: 50,
        required: true,
        unique: true
    },
    name: {
        type: String,
        maxlength: 50,
        required: true
    },
    lastname: {
        type: String,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        maxlength: 50,
        required: true,
        unique: true
    },
    password: {
        type: String,
        maxlength: 64,
        required: true
    },
    state: {
        type: Number,
        default: 1
    }
},
    {
        timestamps: true,
        collection: 'Usuarios'
    }
);

const User = mongoose.model('Usuarios', UserSchema);
export default User;