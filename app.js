
const express = require('express')
const car = require('./routes/team.route')
const app = express()
const path = require('path')
const { I18n } = require('i18n')
var boom = require('express-boom');
 
const port = process.env.PORT || 3003

const i18n = new I18n({
    locales: ['en', 'es'],
    directory: path.join(__dirname, 'locales')
})


app.use(express.json())
app.use(i18n.init)
app.use(boom())
app.use('/radar/api/teams/', car)


app.listen(port)


/*const express = require ('express')
const team = require ('./routes/team.route')
const app = express()
const port = process.env.PORT || 8080

app.use(express.json)
app.use('/api/teams/',team)

//Abrir puerto
app.listen(port)*/
