const Sequelize = require('sequelize');

//Serves all the request which includes /images in the url from Images folder

var db = {}

const sequelize = new Sequelize('teretana', 'amelpandur', 'amelpandur', {
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

db.Clanarina = require(__dirname + "/Modeli/clanarina.js")(sequelize, Sequelize.DataTypes)
db.Osoba = require(__dirname + "/Modeli/osoba.js")(sequelize, Sequelize.DataTypes)

db.sequelize = sequelize
db.Sequelize = Sequelize

db.Clanarina.hasOne(db.Osoba)
db.Osoba.belongsTo(db.Clanarina)

module.exports = db