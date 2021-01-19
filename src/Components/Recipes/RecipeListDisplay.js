import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {HiPencil, HiX} from 'react-icons/hi'
import {connect} from 'react-redux'
import {getAllRecipes} from '../../Redux/RecipeReducer'

class RecipeListDisplay extends Component {
    
    render() {
        let {myList} = this.props
        console.log(myList)
        if (!myList) {
            return <div className='no-recipes'>Your list is empty. Click 'New Recipe' above to get started!</div>
        } 
        let mappedRecipes = this.props.myList.map((recipe) => (
            <div key={recipe.recipe_id} className='indiv-recipe'>
                <p>pic</p>
                <Link
                    to={`/my-recipe/${recipe.recipe_id}`}
                    recipe_id={recipe.recipe_id}
                    className='recipe-link'>
                <h3 className='recipe-title'>{recipe.title}</h3>
                </Link>
                <Link to={`/edit-recipe/${recipe.recipe_id}`} recipe_id={recipe.recipe_id}>
                    <HiPencil className='icon' />
                </Link>
                <HiX
                    className='icon'
                    onClick={_ => this.deleteRecipe(recipe.recipe_id)}
                />
                </div>
            ))
        return (
            <div className='single-recipe-container'>
                {mappedRecipes}    
            </div>   
        )
    }
}

function mapStateToProps(reduxState) {
    console.log(reduxState)
    let recipes = reduxState.recipes
    return {recipes}
}

export default withRouter((connect(mapStateToProps, {getAllRecipes})(RecipeListDisplay)))


//stuck with passing from store/state down here--everything is coming in undefined