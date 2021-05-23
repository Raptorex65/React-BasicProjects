const Sequelize = require('sequelize');
const dbConfig = require('../environment-config.json')
const MovieModel = require('../models/movie.model');
const RentModel = require('../models/rent.model')
const StudentModel = require('../models/student.model')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.movies = MovieModel(sequelize, Sequelize);
db.rents = RentModel(sequelize, Sequelize);
db.students = StudentModel(sequelize, Sequelize);

// create relationship
db.movies.hasMany(db.rents);

// use it to force to create the db from scratch 
// .sync({ force: true })
//db.sequelize.sync().then(() => {
//  console.log("Drop and re-sync db.");
//});


module.exports = db;



