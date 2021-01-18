import React, {Component} from 'react'
// import axios from 'axios'
import UserHeader from '../Header/UserHeader'
// import {connect} from 'react-redux'
// import {getAllRecipes} from '../../Redux/RecipeReducer'

class SingleRecipe extends Component {
    constructor () {
        super()
        this.state = { }
    }

    componentDidMount(){
        console.log(this.props.location.aboutProps.recipe_id)
    }

    render () {
        return (
            <div>
                <UserHeader />
                <div>{this.props.recipe}</div>
                <div>HELLO</div>
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