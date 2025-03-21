const dbConfig = require('../config/dbConfig')

const {Sequelize, DataTypes} = require('sequelize')//Sequalize is like mongoose 

//We create an object from sequilize



const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false //If errors in your code will overwrite the errors using this line
    }
);

sequelize.authenticate()
.then(() => {
    console.log('Database connection Succesfull ...')
})
.catch(err => {
    console.log('Error' + err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require('./studentModel.js')(sequelize, DataTypes);//This the part connectin us to the model
db.courses = require('./courseModel.js')(sequelize, DataTypes);//This the part connecting us to the model


db.sequelize.sync ({force: false})//If u set to true its going to refresh and this clears all data in the database
.then(() => {
    console.log('re-sync done');
})

module.exports = db