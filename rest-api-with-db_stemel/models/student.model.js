
const Sequelize = require('sequelize');

const sequelize = require('../util/sequelize-db');

const Student = sequelize.define('student', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  className: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  fatherName: {
    type: Sequelize.STRING
  }
});

module.exports = Student;


