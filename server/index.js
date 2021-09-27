let express = require("express")
let app = express()
let db = require("./Baza podataka/baza")
var bodyParser = require("body-parser")
const Sequelize = require("sequelize")
var cors = require("cors")

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

db.sequelize.sync({force: false}).then(d => {

}).catch(d => {
    console.log(d)
    console.log("Ne valja")
})

app.get("/osobe", (req, res) => {
    db.Osoba.findAll().then(o => {
        res.json(o)
    }).catch(o => {
        console.log("Ne valja")
    })
})

app.get("/osoba/:id", (req, res) => {
    db.Osoba.findOne({where: {ClanarinaId: req.params.id}}).then(d => res.json(d)).catch(d => console.log("Ne valja"))
})

app.get("/maxClanarina", (req, res) => {
    db.Osoba.max('ClanarinaId').then(d => res.json(d)).catch(d => console.log("ne valja"))
})

app.post("/osoba", (req, res) => {
    db.Osoba.create(req.body).then(d => res.json({poruka: "Dodano"})).catch(d => res.json({poruka: "Nije dodano"}))
})

app.post("/clanarina", (req, res) => {
    let danas = new Date()
    let zaMjesec = new Date(danas.getFullYear(), danas.getMonth()+1, danas.getDay())
    db.Clanarina.create({id: Number(req.body.id), datum_placanja: danas.getDate(), datum_isteka: zaMjesec}).then(d => res.json({poruka: "Dodano"})).catch(d => res.json("Nije dodano"))
})

app.delete("/osoba/:id", (req, res) => {
    db.Osoba.destroy({where: {ClanarinaId: req.params.id}}).then(d => {
        res.json({poruka: "Obrisano"})
    }).catch(d => {
        res.json({poruka: "Nije obrisano"})
    })
})

app.put("/osoba/:id", (req, res) => {
    db.Osoba.update(req.body, {where: {ClanarinaId: req.params.id}}).then(d => {
        res.json({poruka: "Updateano"})
    }).catch(d => {
        res.json({poruka: "Nije updateano"})
    })
})

app.put("/clanarina/:id", (req, res) => {
    db.Clanarina.update(req.body, {where: {id: req.params.id}}).then(d => {
        res.json({poruka: "Updateano"})
    }).catch(d => {
        res.json({poruka: "Nije updateano"})
    })
})

var server = app.listen(3000);

module.exports = app