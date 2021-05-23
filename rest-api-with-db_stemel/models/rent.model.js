  
const Sequelize = require('sequelize');

const sequelize = require('../util/sequelize-db');

const Rent = sequelize.define("rent", {
  startDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  duration: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  customer: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Rent;


