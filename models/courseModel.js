module.exports = (sequelize, DataTypes) => {
  const course = sequelize.define("Course", {
    course_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    Coursename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return course;
};
