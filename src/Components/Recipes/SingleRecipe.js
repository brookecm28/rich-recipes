import axios from 'axios'
import React, {Component} from 'react'
import UserHeader from '../Header/UserHeader'
import {connect} from 'react-redux'
import {getOneRecipe} from '../../Redux/RecipeReducer'
import './SingleRecipe.css'

class SingleRecipe extends Component {
    constructor () {
        super()
        this.state = {
            recipe: []
        }
    }

    componentDidMount () {
        let id = this.props.match.params.recipe_id
        this.props.getOneRecipe(id)
    }

    render () {
        let mappedInstructions = this.props.recipes[0].map(el => {
            return (
                <div>
                    <a>{el.step_number}</a>
                    <div>{el.instruction}</div>
                </div>
            )
        })
        let mappedIngredients = this.props.recipes[1].map(el => {
            return (
                <div key={el.instructions_id}>
                    <a>{el.quantity} {el.measurement} {el.ingredient}</a>
                </div>
            )
        })
        console.log(this.props.recipes)
        console.log(this.props.recipes[0][0].title)
        return (
            <div className='edit-page'>
                <UserHeader />
                <div>{this.props.recipes[0][0].title}</div>
                {mappedIngredients}
                {mappedInstructions}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        recipes: state.recipe.singleRecipe
    }
}

export default connect(mapStateToProps, {getOneRecipe})(SingleRecipe)