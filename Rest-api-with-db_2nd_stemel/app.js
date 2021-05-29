const express = require('express');
let app = express();

// Middlewares
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')

// Routers
const teachersRouter = require('./routes/teachers');
const lecturesRouter = require('./routes/lectures')
const studentsRouter = require('./routes/students')
const enrollmentsRouter = require('./routes/enrollments')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/teachers', teachersRouter);
app.use('/lectures', lecturesRouter);
app.use('/students', studentsRouter)
app.use('/enrollments', enrollmentsRouter)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, ()=>{
   console.log("listening on 3000"); });

