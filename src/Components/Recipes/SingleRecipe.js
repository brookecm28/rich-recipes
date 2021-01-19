import axios from 'axios'
import React, {Component} from 'react'
import UserHeader from '../Header/UserHeader'
// import {connect} from 'react-redux'
// import {getAllRecipes} from '../../Redux/RecipeReducer'
import './SingleRecipe.css'

class SingleRecipe extends Component {
    constructor () {
        super()
        this.state = {
            recipe: []
        }
        this.getRecipe = this.getRecipe.bind(this)
    }

    componentDidMount () {
        this.getRecipe()
    }

    getRecipe () {
        let id = this.props.match.params.recipe_id
        axios.get(`/api/recipes/${id}`)
        .then(res => {
            console.log(res.data)
            console.log('mounted')
            this.setState({
                recipe: [...res.data]
            })
        })
        .catch(err => console.log(err))
    }

    render () {
        // const recipe = this.state
        console.log(this.state.recipe[0])
        return (
            <div>
                <UserHeader />
                <div className='single-page'>
                    <h1>{this.state.recipe[0]}</h1>
                    <div>HELLO</div>
                </div>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     console.log(state)
//     return {getSingleRecipe: state.getSingleRecipe}
// }

// export default connect(mapStateToProps, {getSingleRecipe})(SingleRecipe)

export default SingleRecipe