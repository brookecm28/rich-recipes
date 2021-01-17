import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import AuthReducer from './AuthReducer'
import RecipeReducer from './RecipeReducer'

const rootReducer = combineReducers({
    user: AuthReducer,
    recipe: RecipeReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))