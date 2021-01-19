import React, {Component} from 'react'
import axios from 'axios'
import UserHeader from '../Header/UserHeader'
import './EditRecipe.css'
import {getOneRecipe} from '../../Redux/RecipeReducer'
import {connect} from 'react-redux'

class EditRecipe extends Component {
    constructor () {
        super()
        this.state = {
            title: '',
            ingredients: [],
            instructions: [],
            photo: ''
        }
        this.updateInfo = this.updateInfo.bind(this)
    }

    componentDidMount() {
        let id = this.props.match.params.recipe_id
        this.props.getOneRecipe(id)
    }

    componentWillUnmount() {
        this.setState ({
            title: '',
            ingredients: [],
            instructions: [],
            photo: ''
        })
    }

    updateInfo() {
        
        
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
                <div>Edit Recipe</div>
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

export default connect(mapStateToProps, {getOneRecipe})(EditRecipe)