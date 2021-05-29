// JUNCTION MODEL

module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define("MDL_enrollment", {
    enrollment_junction_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.INTEGER,
      primaryKey: true //Main Primary key defined as true
    },
    student_id: {
      type: DataTypes.INTEGER,
      primaryKey: false, //Other Primary keys defined as false
      references: {
        model: 'MDL_student', //Model definition
        key: 'student_id'  //Key definition
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      unique: 'unique-genre-per-post' //Uniqe id definition
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      references: {
        model: 'MDL_teacher',
        key: 'teacher_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      unique: 'unique-genre-per-post'
    },
    lecture_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      references: {
        model: 'MDL_lecture',
        key: 'lecture_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      unique: 'unique-genre-per-post'
    }
    });
    return Enrollment;
  };
  

