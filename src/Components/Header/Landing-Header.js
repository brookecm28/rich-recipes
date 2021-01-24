import React, {Component} from 'react'
import styles from './LandingHeaderStyles'
import lobsterLogo from './../../assets/blue-lobster-logo.png'
import {Link, withRouter} from 'react-router-dom'
// import {connect} from 'react-redux'

const LandingHeader = props => {
    return (
                <div className ='header' style={styles}>
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
        // return this.props.location.pathname !== '/' &&

export default withRouter(LandingHeader)