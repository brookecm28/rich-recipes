import React, {Component} from 'react'
import axios from 'axios'
import UserHeader from '../Header/UserHeader'
import {Link, withRouter} from 'react-router-dom'
import '../Recipes/RecipeList.css'
import {connect} from 'react-redux'
import {HiX, HiPencil} from 'react-icons/hi'
import {updateUser, logout} from '../../Redux/Reducer'

class RecipeList extends Component {
    constructor() {
        super() 
        this.state = {
            recipes: [],
            // loading: true
        }
    }

    componentDidMount() {
    //    this.listRecipes() 
       console.log(this.props.location.pathname)
       console.log(this.props.id)
       axios.get('/api/recipes')
       .then(res => {
           console.log(res.data)
           this.setState ({
               recipes: res.data,
               // loading: false
           })
           console.log(this.state.recipes)
       })
    }

    deleteRecipe(id) {
        axios.delete(`/api/recipes/delete/${id}`)
        .then(_ => this.componentDidMount())
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
                    <HiPencil className='icon' />
                    <HiX className='icon' 
                    onClick={_ => this.deleteRecipe(recipe.recipe_id)}
                     />
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
    return {
        updateUser: state.updateUser,
        logout: state.logout
    }
}

export default withRouter((connect(mapStateToProps, {updateUser, logout})(RecipeList)))