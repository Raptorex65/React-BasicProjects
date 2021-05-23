  
const Sequelize = require('sequelize');

const sequelize = require('../util/sequelize-db');

const Rent = sequelize.define('rent', {
  startDate: {
    type: Sequelize.DATE
  },
  duration: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.DOUBLE
  },
  customer: {
    type: Sequelize.STRING
  }
});

module.exports = Rent;


