import React, {Component} from 'react'
import UserHeader from '../Header/UserHeader'
import {connect} from 'react-redux'
import {getOneRecipe} from '../../Redux/RecipeReducer'
import './SingleRecipe.css'
// import {styles} from './SingleRecipesStyles'
// import {withStyles} from 'react-jss'

// const useStyles = theme => ({
//     instrContainer: {
//         display: 'flex',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         backgroundColor: '#faf6f0'
//     },
//     singlePage: {
//         backgroundColor: '#8BC5F9',
//         marginTop: '100px', 
//         color: '002626',
//         height: '100vh'
//     }
// })

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
        // const classes = this.props
        let mappedInstructions;
        if (this.props.recipes[0]) {
           mappedInstructions = this.props.recipes[0].map(el => {
            return (
                <div className='instr-container' key={el.step_number}>
                    <div id='instr-words'>{el.step_number}. {el.instruction}</div>
                </div>
            )
        })  
        }
       
        console.log(this.props.recipes)
        let mappedIngredients;
        if (this.props.recipes[1]) {
            mappedIngredients = this.props.recipes[1].map(el => {
                return (
                    <div className='ing-container' key={el.instructions_id}>
                        <div id='ing-words'>{el.quantity} {el.measurement} {el.ingredient}</div>
                    </div>
                )
            })
        }
        console.log(this.props)
        // console.log(this.props.recipes[0][0].title)
        return (
            <div className='single-page'>
                <UserHeader />
                <div className='single-disp-body'>
                {this.props.recipes[0] && (
                    <>
                        <h1 className='sxn-title'>{this.props.recipes[0][0].title}</h1>
                        <img className='single-disp-img' src={this.props.recipes[0][0].photo} />
                    </>)
                    }
                    <div className='single-disp-section'>
                        <div className='single-disp-section-title'>
                            <h2 className='sxn-title'>Ingredients</h2>
                            {mappedIngredients}
                        </div>
                    </div>
                    <div className='single-disp-section'>
                        <div className='single-disp-section-title'>
                            <h2 className='sxn-title'>Instructions</h2>
                            {mappedInstructions}
                        </div>
                    </div>
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

export default connect(mapStateToProps, {getOneRecipe})(SingleRecipe)

// export default withStyles(useStyles, connect(mapStateToProps, {getOneRecipe})(SingleRecipe))