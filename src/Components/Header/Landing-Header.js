import React, {Component} from 'react'
import axios from 'axios'
import lobsterLogo from './../../assets/blue-lobster-logo.png'
import './Header.css'
// import {Link, withRouter} from 'react-router-dom'
// import {connect} from 'react-redux'

class LandingHeader extends Component {
    constructor () {
        super()
        this.state = {}
    }

    render() {
        // return this.props.location.pathname !== '/' &&
         return (
            <div className ='header'>
                <div className="left-header">
                    <img src={lobsterLogo} alt='lobster logo' className='logo'/>
                    <h1>Rich Recipes</h1>
                </div>
                <div className="right-header">
                    <nav>
                        <button className='btn'>Join</button>
                        <button className='btn'>Register</button>
                    </nav>
                </div>
            </div>
        )
    }
}

export default LandingHeader