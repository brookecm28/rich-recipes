import React, {Component} from 'react'
import axios from 'axios'
import UserHeader from '../Header/UserHeader'
import {Link, withRouter} from 'react-router-dom'
import '../Recipes/RecipeList.css'
import {connect} from 'react-redux'
import {updateUser, logout} from '../../Redux/AuthReducer'
import RecipeListDisplay from './RecipeListDisplay'
import { getAllRecipes } from '../../Redux/RecipeReducer'

class RecipeList extends Component {
    constructor() {
        super() 
        this.state = {
            recipes: [],
            recipeId: 0,
            // loading: true
        }
    }

    componentDidMount() {
    //    this.listRecipes() 
       console.log(this.props.location.pathname)
       this.props.getAllRecipes()
    //    axios.get('/api/recipes')
    //    .then(res => {
    //        console.log(res.data)
    //        this.setState ({
    //            recipes: res.data,
    //            // loading: false
    //        })
    //        console.log(this.state.recipes)
    //    })
    }

    deleteRecipe(id) {
        axios.delete(`/api/recipes/delete/${id}`)
        .then(_ => this.componentDidMount())
    }

    sendToState(recipe_id) {
        this.setState({recipeId: recipe_id})
    }

    render () {
        let {recipes} = this.state
        console.log(this.props.recipes)
        // let mappedRecipes = recipes.map(recipe => {
        //     console.log(recipe.recipe_id, recipe.rr_user_id)
        //     return (
                
        //     )
        // })

        return (
            <div className="r-list">
                <UserHeader />
                <h1 className='my-recipes-title'>My Recipes</h1>
                <div className='singles-container'>
                   <RecipeListDisplay myList={this.props.recipes} /> 
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        updateUser: state.updateUser,
        logout: state.logout,
        recipes: state.recipe.recipe
    }
}

export default withRouter((connect(mapStateToProps, {updateUser, logout, getAllRecipes})(RecipeList)))