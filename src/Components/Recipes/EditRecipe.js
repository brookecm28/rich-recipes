import React, {Component} from 'react'
import axios from 'axios'
import UserHeader from '../Header/UserHeader'
import './EditRecipe.css'
import {getOneRecipe} from '../../Redux/RecipeReducer'
import {connect} from 'react-redux'
import './SingleRecipe.css'

class EditRecipe extends Component {
    constructor () {
        super()
        this.state = {
            title: '',
            photo: '',
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

    handlePhotoChange (e) {
        this.setState ({
            photo: e
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
        if (this.state.photo === '') {
            this.setState ({
                photo: this.props.recipes[0][0].photo
            })
         }
        let stringInstructions = this.state.tempInstructions.split('\n')
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
        let incomingInstructions = []
        for (let i = 0; i < this.props.recipes[0].length; i++) {
            incomingInstructions.push({
                step: this.props.recipes[0][i].step_number,
                instruction: this.props.recipes[0][i].instruction
            })
        }
        axios.put(`/api/recipes/update/${id}`, {
            title: (this.state.title === '' ? this.props.recipes[0][0].title : this.state.title),
            // ingredients: formattedIngredients,
            instructions: (this.state.tempInstructions === '' ? incomingInstructions : formattedInstructions),
            photo: (this.state.photo === '' ? this.props.recipes[0][0].photo : this.state.photo)
        })
        .then(() => {
            this.setState ({
                title: '',
                tempInstructions: []
            }) 
            this.props.history.push('/me')
        })
        .catch(err => console.log(err))
        }

    render () {
        let tempArr = []
        let mappedInstructions;
        if (this.props.recipes[0]) {
            mappedInstructions = this.props.recipes[0].map(el => {
            tempArr.push(el.instruction)
            return tempArr.join('\n')
        })
        }
        let mappedIngredients
        if (this.props.recipes[1]) {
             mappedIngredients = this.props.recipes[1].map(el => {
                return (
                    <div className='ing-container' key={el.instructions_id}>
                        <div id='ing-words'>{el.quantity} {el.measurement} {el.ingredient}</div>
                    </div>
                )
            })
        }
        return (
            <div className='edit-page'>
                <UserHeader />
                <div className='single-disp-body'>
                    {this.props.recipes[0] && (
                        <>
                            <h1 className='sxn-title'>Edit Recipe</h1>
                            <div className='edit-disp-top-sxn'>
                                <div className='edit-disp-title'>
                                    <h2 className='sxn-title'>Title</h2>
                                    <div className='title-input'>
                                        <input
                                            className='inputs '
                                            defaultValue={this.props.recipes[0][0].title}
                                            onChange={(e => this.handleInputChange(e.target.value))}>
                                        </input>
                                    </div>
                                </div>
                                <div className='edit-disp-title photo-title'>
                                    <h2 className='sxn-title '>Photo URL</h2>
                                    <div className='title-input'>
                                        <input
                                            className='inputs '
                                            defaultValue={this.props.recipes[0][0].photo}
                                            onChange={(e => this.handlePhotoChange(e.target.value))}>
                                        </input>
                                    </div>
                                </div>
                            </div>
                    <div className='single-disp-section-title'>
                            <h2 className='sxn-title'>Ingredients</h2>
                            {mappedIngredients}
                        </div>
                    <div className='single-disp-section-title'>
                        <h2 className='sxn-title'>Instructions</h2>
                        <div className='title-input'>
                            <textarea
                                name='text-area'
                                rows='14'
                                cols='75'
                                className='text-area'
                                defaultValue={mappedInstructions[mappedInstructions.length -1]}
                                onChange={e => this.handleInstrChange(e.target.value)}>
                            </textarea>
                        </div>
                        </div>
                    <div className='save-btn'>
                        <button className='btn' id='edit-save-btn' onClick={(e => this.clickSave())} >Save</button>
                    </div>
                    </>
                    )
                    }
                </div>
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