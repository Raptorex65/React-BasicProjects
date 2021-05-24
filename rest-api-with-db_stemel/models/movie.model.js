
module.exports = (sequelize, Sequelize) => {
  return sequelize.define("movie", {
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
}


