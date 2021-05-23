const Sequelize = require('sequelize');

const sequelize = require('../util/sequelize-db');

const Movie = sequelize.define("movie", {
  name: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
  country: {
    type: Sequelize.STRING
  }
});

module.exports = Movie;


