import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Landing from './Components/Landing'
import Auth from './Components/Auth/Auth'
import Register from './Components/Auth/Register'
import RecipeList from './Components/Recipes/RecipeList'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/me' component={RecipeList} />
    </Switch>
)