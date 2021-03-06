import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Landing from './Components/Landing'
import Auth from './Components/Auth/Auth'
import Register from './Components/Auth/Register'
import RecipeList from './Components/Recipes/RecipeList'
import NewRecipe from './Components/Recipes/NewRecipe'
import SingleRecipe from './Components/Recipes/SingleRecipe'
import EditRecipe from './Components/Recipes/EditRecipe'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/me' component={RecipeList} />
        <Route exact path='/new' component={NewRecipe} />
        <Route exact path='/my-recipe/:recipe_id' component={SingleRecipe} />
        <Route exact path='/edit-recipe/:recipe_id' component={EditRecipe} />
    </Switch>
)