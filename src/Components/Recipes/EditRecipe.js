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
            tempInstructions: ''
        }
        this.clickSave = this.clickSave.bind(this)
    }

    componentDidMount() {
        let id = this.props.match.params.recipe_id
        this.props.getOneRecipe(id)
    }

    handleInputChange (e) {
        this.setState ({
            title: e
        })
    }

    handleInstrChange(e) {
        this.setState ({
            tempInstructions: e
        })
    }

    clickSave() {
        let id = this.props.match.params.recipe_id
        if (this.state.title === '') {
           this.setState ({
               title: this.props.recipes[0][0].title
           })
        }
        let stringInstructions = this.state.tempInstructions.split('\n')
        console.log(stringInstructions)
        let formattedInstructions = []
        for (let i = 0; i < stringInstructions.length; i++) {
            formattedInstructions.push({
                step: i + 1,
                instruction: stringInstructions[i]
            })
        }
        let formattedIngredients = this.props.recipes[1].map(el => {
            return ({
                quantity: el.quantity,
                measurement: el.measurement,
                ingredient: el.ingredient
            })
        })
        console.log(formattedIngredients)
        console.log(this.state.title)
        axios.put(`/api/recipes/update/${id}`, {
            title: (this.state.title === '' ? this.props.recipes[0][0].title : this.state.title),
            // ingredients: formattedIngredients,
            instructions: formattedInstructions,
            photo: this.props.recipes[0][0].photo
        })
        .then(() => {
            this.setState ({
                title: '',
                tempInstructions: []
            }) 
            console.log('Recipe updated successfully.')
            this.props.history.push('/me')
        })
        .catch(err => console.log(err))
        }

    render () {
        let tempArr = []
        let mappedInstructions = this.props.recipes[0].map(el => {
            tempArr.push(el.instruction)
            return tempArr.join('\n')
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
                <input 
                    className='inputs'
                    defaultValue={this.props.recipes[0][0].title}
                    onChange={(e => this.handleInputChange(e.target.value))}>
                </input>
                {mappedIngredients}
                <textarea 
                    className='text-area' 
                    defaultValue={mappedInstructions[mappedInstructions.length -1]}
                    onChange={e => this.handleInstrChange(e.target.value)}></textarea>
                <button onClick={(e => this.clickSave())} >Save</button>
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