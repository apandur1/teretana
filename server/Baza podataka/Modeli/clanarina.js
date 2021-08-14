
const Sequelize = require("sequelize");
const sequelize = require('../baza.js');

module.exports = function (sequelize, DataTypes) {
    const Clanarina = sequelize.define('Clanarina', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: false,
            primaryKey: true
        },
        datum_placanja: Sequelize.DATE,
        datum_isteka: Sequelize.DATE,
    });
    return Clanarina;
}