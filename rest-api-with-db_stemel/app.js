const express = require('express');
let app = express();

// Middlewares
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')

// Routers
const moviesRouter = require('./routes/movies');
const rentsRouter = require('./routes/rents')
const studentsRouter = require('./routes/students')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/movies', moviesRouter);
app.use('/rents', rentsRouter);
app.post('/students', studentsRouter)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, ()=>{
   console.log("listening on 3000"); });

