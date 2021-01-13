import React, {Component} from 'react'
import axios from 'axios'
import UserHeader from '../Header/UserHeader'
import {Link, withRouter} from 'react-router-dom'
import '../Recipes/RecipeList.css'

class RecipeList extends Component {
    constructor() {
        super() 
        this.state = {
            id: 0,
            
        }
        
    }

    componentDidMount() {
        console.log(this.props.location.pathname)
        axios.get('')
    }

    render () {
        return (
            <div className="r-list">
                <UserHeader />
                <div>heyyo</div> 
            </div>
            
        )
    }
}

export default withRouter(RecipeList)