import React, { Component } from 'react'
import axios from 'axios'
import UserHeader from '../Header/UserHeader'
import { withRouter } from 'react-router-dom'
import '../Recipes/RecipeList.css'
import { connect } from 'react-redux'
import { updateUser, logout } from '../../Redux/AuthReducer'
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
        this.props.getAllRecipes()
    }

    deleteRecipe(id) {
        axios.delete(`/api/recipes/delete/${id}`)
            .then(_ => this.componentDidMount())
    }

    sendToState(recipe_id) {
        this.setState({ recipeId: recipe_id })
    }

    render() {
        // console.log(this.props.recipes) //coming in undefined

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
    return {
        updateUser: state.updateUser,
        logout: state.logout,
        recipes: state.recipe.recipes
    }
}

export default withRouter((connect(mapStateToProps, { updateUser, logout, getAllRecipes })(RecipeList)))