
module.exports = (sequelize, Sequelize) => {
  const Lecture = sequelize.define("MDL_lecture", {
    lecture_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: Sequelize.STRING
    }
  });
  return Lecture;
};


