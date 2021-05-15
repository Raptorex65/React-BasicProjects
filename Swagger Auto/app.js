import express from 'express';


// Middlewares
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
// Routers
import moviesRouter from  './routes/movies.js';
import rentsRouter from  './routes/rents.js';

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/movies', moviesRouter);
app.use('/rents', rentsRouter);


app.listen(3000, ()=>{
    console.log("listening on 3000: http://localhost:3000/");
});