import React, {Component} from 'react'
import axios from 'axios'
import UserHeader from '../Header/UserHeader'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {HiPencil} from 'react-icons/hi'
import {getSingleRecipe} from '../../Redux/RecipeReducer'

class SingleRecipe extends Component {
    constructor () {
        super()
        this.state = { }
    }

    componentDidMount(){
        this.props.getSingleRecipe()
        console.log(this.props.recipeId)
    }

    render () {
        return (
            <div>
                <UserHeader />
                <div>{this.props.recipe}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {getSingleRecipe: state.getSingleRecipe}
}

export default connect(mapStateToProps, {getSingleRecipe})(SingleRecipe)