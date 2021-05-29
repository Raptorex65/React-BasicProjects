
module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("MDL_student", {
    student_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    FirstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    LastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Class: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Age: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
  return Student;
};



