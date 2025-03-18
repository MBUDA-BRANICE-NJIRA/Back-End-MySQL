

module.exports = (Sequelize, DataTypes) => {
    const Student = Sequelize.define('Student', {
        Student_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
        autoIncrement: true
        },
        firstname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        gender:{
            type: DataTypes.STRING,
            allowNull: true
        },

    });

    return Student
}