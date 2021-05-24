module.exports = (sequelize, Sequelize) => {
  return sequelize.define("rent", {
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

}


