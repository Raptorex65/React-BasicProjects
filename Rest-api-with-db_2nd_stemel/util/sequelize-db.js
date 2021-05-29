const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('../environment-config.json')
const Lecture = require('../models/lecture.model');
const Teacher = require('../models/teacher.model')
const Student = require('../models/student.model')
const Enrollment = require('../models/enrollment.model');

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
db.lectures = Lecture(sequelize, Sequelize);
db.teachers = Teacher(sequelize, Sequelize);
db.students = Student(sequelize, Sequelize);
db.enrolls = Enrollment(sequelize, DataTypes);

// create relationship
//db.students.hasMany(db.lectures); Bunlar extra tanimlamalar
//db.teachers.hasMany(db.students); Bunlar extra tanimlamalar

db.students.belongsToMany(db.lectures, { as: 'LecturesforStudent', through: db.enrolls, foreignKey: 'student_id'});
db.lectures.belongsToMany(db.teachers, { as: 'TeachersinLectures', through: db.enrolls, foreignKey: 'lecture_id'});
db.teachers.belongsToMany(db.students, { as: 'StudentsofTeachers', through: db.enrolls, foreignKey: 'teacher_id'});
// The as key in the second argument's config object using belongsToMany is a way to specify the alias when we're doing Eager Loading / Include Queries

db.enrolls.belongsTo(db.students, { foreignKey: 'student_id', targetKey: 'student_id', as: 'Student' });
db.enrolls.belongsTo(db.teachers, { foreignKey: 'teacher_id', targetKey: 'teacher_id', as: 'Teacher' });
db.enrolls.belongsTo(db.lectures, { foreignKey: 'lecture_id', targetKey: 'lecture_id', as: 'Lecture' });

// use it to force to create the db from scratch 
// .sync({ force: true })
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = db;



