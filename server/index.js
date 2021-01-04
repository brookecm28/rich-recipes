require('dotenv').config()
const express = require('express')
const recipeCtrl = require('./controllers/recipes')
const massive = require('massive')
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env
const session = require('express-session')

const app = express()

//middleware
app.use(express.json())

//session & cookie setup
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000*60*60*24*180}
}))

//auth endpoints

//recipe endpoints

massive ({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB Ready')
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
})