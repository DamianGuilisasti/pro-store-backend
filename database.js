import mongoose from 'mongoose';

const {PROSTORE_MONGODB_HOST,PROSTORE_MONGODB_DATABASE} = process.env;

const MONGODB_URI = `mongodb://${PROSTORE_MONGODB_HOST}/${PROSTORE_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

.then(db => console.log('Database is connected'))
.catch(err => console.log(err));
