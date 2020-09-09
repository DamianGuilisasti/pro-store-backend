// Imports

import express from 'express';
import router from './routes';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
require('dotenv').config();

// DB Connection

require('./database');

// Inicializations

const app = express();

// Settings

app.set('port', process.env.PORT || 4000);

//Middlewares

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes

app.use('/api', router);

// Statis Files

app.use(express.static(path.join(__dirname, 'public')));

// Start the Server

app.listen(app.get('port'), () =>{
    console.log('Server on port:', app.get('port'));
});