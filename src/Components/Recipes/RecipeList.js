import React, {Component} from 'react'
import axios from 'axios'
import UserHeader from '../Header/UserHeader'
import {Link, withRouter} from 'react-router-dom'
import '../Recipes/RecipeList.css'
import {connect} from 'react-redux'

class RecipeList extends Component {
    constructor() {
        super() 
        this.state = {
            recipes: [],
            // loading: true
        }
        
    }

    componentDidMount() {
        console.log(this.props.location.pathname)
        console.log(this.props.id)
        axios.get('/api/recipes')
        .then(res => {
            this.setState ({
                recipes: res.data,
                // loading: false
            })
            console.log(this.state.recipes)
        })
    }

    render () {
        let {recipes} = this.state
        let mappedRecipes = recipes.map(recipe => {
            console.log(recipe.recipe_id, recipe.rr_user_id)
            return (
                <div className='single-recipe-container' key={recipe.recipe_id}>
                    <p>pic</p>
                    <Link recipe_id={recipe.recipe_id} className='recipe-link'>
                        <h3 className='recipe-title'>{recipe.title}</h3>
                    </Link>
                    <p>edit</p>
                    <p>delete</p>
                    
                </div>
            )
        })
        return (
            <div className="r-list">
                <UserHeader />
                <h1 className='my-recipes-title'>My Recipes</h1>
                <div className='singles-container'>
                   {mappedRecipes} 
                </div>
                
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return state;
}

export default withRouter((connect(mapStateToProps)(RecipeList)))