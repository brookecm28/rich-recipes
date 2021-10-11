import UserHeader from '../Header/UserHeader'
import '../Recipes/NewRecipe.css'
import React, { Component } from 'react'
import axios from 'axios'

class NewRecipe extends Component {
    constructor() {
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
        this.setState({
            title: e
        })
    }

    handleImageChange(e) {
        this.setState({
            img: e
        })
    }

    handleQuantityChange(e) {
        this.setState({
            quantity: e
        })
    }

    handleMeasurementchange(e) {
        this.setState({
            measurement: e
        })
    }

    handleIngredientChange(e) {
        this.setState({
            ingredient: e
        })
    }

    handleInstructionChange(e) {
        this.setState({
            tempInstructions: e
        })
    }

    addIngredient() {
        this.setState({
            ingredients: [...this.state.ingredients, {
                quantity: this.state.quantity,
                measurement: this.state.measurement,
                ingredient: this.state.ingredient
            }]
        })
        this.setState({
            quantity: '',
            measurement: '',
            ingredient: ''
        })
    }

    addRecipe() {
        this.setState({
            instructions: this.state.tempInstructions.split('\n')
        })

        axios.post('/api/recipes/new', {
            title: this.state.title,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions,
            photo: this.state.img
        })
            .then(() => {
                this.props.history.push('/me')
            })
            .catch(err => console.log(err))
    }

    render() {
        let { ingredients } = this.state
        let counter = 0;
        let mappedIngredients = ingredients.map(ingredient => {
            return (
                <div className='single-ingredient-container' key={counter + 1}>
                    <p className='ing-list'>{ingredient.quantity} </p>
                    <p className='ing-list'>{ingredient.measurement} </p>
                    <p className='ing-list'>{ingredient.ingredient}</p>
                </div>
            )
        })
        return (
            <div>
                <UserHeader />
                <div className='body'>
                    <div className='content-container'>
                        <h1 className='new-title'>New Recipe</h1>
                        <div className='top-group'>
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
                                    placeholder='Image URL'
                                    value={this.state.img}
                                    onChange={e => this.handleImageChange(e.target.value)}>
                                </input>
                            </div>
                        </div>
                        <div className='ingredient-container'>
                            <div className='group-title'>Ingredients</div>
                            <input
                                className='inputs ing-input quan'
                                placeholder='Quantity'
                                value={this.state.quantity}
                                onChange={e => this.handleQuantityChange(e.target.value)}>
                            </input>
                            <input
                                className='inputs ing-input'
                                placeholder='Measurement'
                                value={this.state.measurement}
                                onChange={e => this.handleMeasurementchange(e.target.value)}>
                            </input>
                            <input
                                className='inputs ing-input'
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
                                rows='14'
                                cols='75'
                                className='text-area'
                                placeholder='Instructions'
                                value={this.state.tempInstructions}
                                onChange={e => this.handleInstructionChange(e.target.value)}
                            ></textarea>
                        </div>
                        <button className='btn add-recipe'
                            onClick={this.addRecipe}>Add Recipe</button>
                        <div className='ing-list-container-container'>
                            <div className='ing-list-container'>
                                {mappedIngredients}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewRecipe