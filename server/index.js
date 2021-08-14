let express = require("express")
let app = express()
let db = require("./Baza podataka/baza")
var bodyParser = require("body-parser")
const Sequelize = require("sequelize")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

db.sequelize.sync({force: false}).then(d => {

}).catch(d => {
    console.log(d)
    console.log("Ne valja")
})

app.get("/osobe", (req, res) => {
    db.Osoba.findAll({}).then(o => {
        res.json(o)
    }).catch(o => {
        console.log("Ne valja")
    })
})

app.post("/osoba", (req, res) => {
    let danas = new Date()
    let zaMjesec = new Date(danas.getFullYear(), danas.getMonth()+1, danas.getDay())
    db.Clanarina.create({id: Number(req.body.ClanarinaId), datum_placanja: danas.getDate(), datum_isteka: zaMjesec})
    db.Osoba.create(req.body).then(d => res.json({poruka: "Dodano"})).catch(d => res.json({poruka: "Nije dodano"}))
})

var server = app.listen(3000);

module.exports = app