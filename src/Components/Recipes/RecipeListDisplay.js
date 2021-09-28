import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {HiPencil, HiX} from 'react-icons/hi'
import {connect} from 'react-redux'
import {getAllRecipes} from '../../Redux/RecipeReducer'

class RecipeListDisplay extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.setState ({
            list: [this.props.recipes]
        })
    }

    render() {
        let {recipes} = this.props
        console.log(this.props)
        // if (myList === []) {
        //     return <div className='no-recipes'>Your list is empty. Click 'New Recipe' above to get started!</div>
        // }
        let mappedRecipes
        if (recipes) {
            mappedRecipes = recipes.map((recipe) => (
            <div key={recipe.recipe_id} className='indiv-recipe'>
                <img 
                    className='list-pic' 
                    src={recipe.photo} 
                    alt='Not Available'
                />
                <Link
                    to={`/my-recipe/${recipe.recipe_id}`}
                    recipe_id={recipe.recipe_id}
                    className='recipe-link'>
                <h3 className='recipe-title'>{recipe.title}</h3>
                </Link>
                <Link 
                    to={`/edit-recipe/${recipe.recipe_id}`} 
                    recipe_id={recipe.recipe_id}
                    className='icon-container'    
                >
                    <HiPencil className='icon pencil' />
                </Link>
                <HiX
                    className='icon delete'
                    onClick={_ => this.deleteRecipe(recipe.recipe_id)}
                />
                </div>
            ))
        }
       
        return (
            <div className='single-recipe-container'>
                {this.props.recipes && (
                    <>
                        {mappedRecipes}  
                    </>
                )}
                      
            </div>   
        )
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipe.recipes
    }
}

export default withRouter((connect(mapStateToProps, {getAllRecipes})(RecipeListDisplay)))


//stuck with passing from store/state down here--everything is coming in undefined