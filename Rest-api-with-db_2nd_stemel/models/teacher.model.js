module.exports = (sequelize, Sequelize) => {
  const Teacher = sequelize.define("MDL_teacher", {
    teacher_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    }
    });
    return Teacher;
  };

