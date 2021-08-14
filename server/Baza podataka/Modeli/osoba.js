const Sequelize = require("sequelize");
const sequelize = require('../baza.js');

module.exports = function (sequelize, DataTypes) {
    const Osoba = sequelize.define('Osoba', {
        ime: Sequelize.STRING,
        prezime: Sequelize.STRING,
        student: {
            type: Sequelize.STRING,
            validate: {
                isIn: {
                    args: [['Da', 'Ne']]
                }
            }
        },
        spol: {
            type: Sequelize.STRING,
            validate: {
                isIn: {
                    args: [['M', 'F']]
                }
            }
        },
        trener: {
            type: Sequelize.STRING,
            validate: {
                isIn: {
                    args: [['Da', 'Ne']]
                }
            }
        }
    });
    return Osoba;
}