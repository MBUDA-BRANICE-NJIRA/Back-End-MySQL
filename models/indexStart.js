const dbConfig = require('../config/dbConfig')

const {Sequelize, DataTypes} = require('sequelize')


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Database connection Succesfull ...')
})
.catch(err => {
    console.log('Error' + err);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students = require('./student.model')(sequelize, DataTypes);


db.Sequelize.sync ({force: false})
.then(() => {
    console.log('re-sync done');
})

module.exports = db