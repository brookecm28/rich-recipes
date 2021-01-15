import UserHeader from '../Header/UserHeader'
import '../Recipes/NewRecipe.css'
import React, {Component} from 'react'
import axios from 'axios'

class NewRecipe extends Component {
    constructor () {
        super()
        this.state = {
            title: '',
            img: '',
            ingredients: [],
            instructions: [],
            quantity: '',
            measurement: '',
            ingredient: '',
            tempInstructions: '',
            completeRecipe: {}
        }
        this.addIngredient = this.addIngredient.bind(this)
        this.addRecipe = this.addRecipe.bind(this)
    }

    handleTitleChange(e) {
        this.setState ({
            title: e
        })
        console.log(this.state.title)
    }

    handleImageChange(e) {
        this.setState ({
            img: e
        })
        console.log(this.state.img)
    }
    
    handleQuantityChange(e) {
        this.setState ({
            quantity: e
        })
        console.log(this.state.quantity)
    }

    handleMeasurementchange(e) {
        this.setState ({
            measurement: e
        })
        console.log(this.state.measurement)
    }

    handleIngredientChange(e) {
        this.setState ({
            ingredient: e
        })
        console.log(this.state.ingredient)
    }

    handleInstructionChange (e) {
        this.setState ({
            tempInstructions: e
        })
        console.log(this.state.tempInstructions)
    }

    addIngredient() {
        this.setState ({
             ingredients: [...this.state.ingredients, {
                 quantity: this.state.quantity,
                 measurement: this.state.measurement,
                 ingredient: this.state.ingredient
             }]
        })
        this.setState ({
            quantity: '',
            measurement: '',
            ingredient: ''
        })
        console.log(this.state.ingredients)
    }

    addRecipe() {
        let stringInstructions = this.state.tempInstructions.split('\n')
        console.log(stringInstructions)
        let formattedInstructions = []
        for (let i = 0; i < stringInstructions.length; i++) {
            formattedInstructions.push({
                step: i + 1,
                instruction: stringInstructions[i]
            })
            console.log(formattedInstructions)
        }
        this.setState({
            instructions: [formattedInstructions]
        })
        console.log(this.state.instructions)
        console.log(this.state.completeRecipe)
        axios.post('/api/recipes/new', {
            title: this.state.title,
            ingredients: this.state.ingredients,
            instructions: formattedInstructions,
            photo: this.state.img
        })
        .then(() => {
            console.log('Recipe added successfully.')
            this.props.history.push('/me')
        })
        .catch(err => console.log(err))
    }
    
    render () {
        return (
        <div>
            <UserHeader />
            <div className='body'>
                <div className='content-container'>
                    <div>
                        <div className='group-title'>Title</div>
                        <input 
                            className='inputs'
                            placeholder='Title' 
                            value={this.state.title}
                            onChange={e => this.handleTitleChange(e.target.value)}>
                        </input>
                    </div>
                    <div>
                        <div className='group-title'>Image</div>
                        <input //this will be amazon s3
                            className='inputs'
                            placeholder='Image'
                            value={this.state.img}
                            onChange={e => this.handleImageChange(e.target.value)}>
                        </input>
                    </div>
                    <div className='ingredient-container'>
                        <div className='group-title'>Ingredients</div>
                        <input 
                            className='inputs'
                            placeholder='Quantity' 
                            value={this.state.quantity} 
                            onChange={e => this.handleQuantityChange(e.target.value)}>
                        </input>
                        <input 
                            className='inputs'
                            placeholder='Measurement' 
                            value={this.state.measurement}
                            onChange={e => this.handleMeasurementchange(e.target.value)}>
                        </input>
                        <input 
                            className='inputs'
                            placeholder='Ingredient' 
                            value={this.state.ingredient}
                            onChange={e => this.handleIngredientChange(e.target.value)}>
                        </input>
                        <button className='btn add-ingredient' onClick={this.addIngredient}>Add Ingredient</button>
                    </div>
                    <div>
                        <div className='group-title'>Instructions</div>
                        <div className='text-instr'>Press Enter for a new line; a new line = a new ingredient</div>
                        <textarea 
                            name='text-area'
                            className='text-area'
                            placeholder='Instructions' 
                            value={this.state.tempInstructions}
                            onChange={e => this.handleInstructionChange(e.target.value)}
                            ></textarea>
                    </div>
                    <button className='btn add-recipe'
                        onClick={ this.addRecipe}>Add Recipe</button>
                </div>
            </div>
        </div>
        )
    }
}

export default NewRecipe