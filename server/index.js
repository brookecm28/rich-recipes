require('dotenv').config()
const express = require('express')
const userCtrl = require('./controllers/users')
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
app.post('/api/auth/register', userCtrl.register)
app.post('/api/auth/login', userCtrl.login)
app.post('/api/auth/logout', userCtrl.logout)
app.get('/api/auth/me', userCtrl.getUser)


// //recipe endpoints
app.get('/api/recipes', recipeCtrl.getMyRecipes) //list out all recipes for user account page
app.get('/api/recipes/:recipe_id', recipeCtrl.getOneRecipe) //display specific recipe
app.post('/api/recipes/new', recipeCtrl.newRecipe) //add new recipe
// app.put('/api/recipes/update/:recipe_id', recipeCtrl.updateRecipe) //edit a user's recipe
// app.delete('/api/recipes/delete/:recipe_id', recipeCtrl.deleteRecipe) //delete a user's recipe

massive ({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB Ready')
    app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
})