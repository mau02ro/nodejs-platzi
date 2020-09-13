require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./network/routes')

const MongoLib = require('./lib/mongodb')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('PORT', 3000)

//Definiendo las rutas
routes(app)

const mongo = new MongoLib()
let con = mongo.connect()


app.listen(app.get('PORT'),() => {
	console.log('Server ON')
})