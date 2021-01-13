import React, {Component} from 'react'
import axios from 'axios'
import lobsterLogo from './../../assets/blue-lobster-logo.png'
import './LandingHeader.css'
import {Link, withRouter} from 'react-router-dom'
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
                    <Link to='/' className='lobster-link'>
                        <img src={lobsterLogo} alt='lobster logo' className='logo'/>
                    </Link>
                    <Link to='/' className='lobster-link'>
                        <h1 className='title'>Rich Recipes</h1>
                    </Link>
                </div>
                <div className="right-header">
                    <nav>
                        <Link to='/register' className='register-link'>
                            <button className='btn header-btn'>Join</button>
                        </Link>
                        <Link to='/auth' className='login-link'>
                            <button className='btn header-btn'>Login</button>
                        </Link>
                    </nav>
                </div>
            </div>
        )
    }
}

export default withRouter(LandingHeader)