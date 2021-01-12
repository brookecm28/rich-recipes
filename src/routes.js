import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Landing from './Components/Landing'
import Auth from './Components/Auth/Auth'
import Register from './Components/Auth/Register'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
    </Switch>
)