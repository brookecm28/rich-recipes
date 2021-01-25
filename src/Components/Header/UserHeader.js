import React, {Component} from 'react'
import axios from 'axios'
import lobsterLogo from './../../assets/blue-lobster-logo.png'
import './UserHeader.css'
import {Link, withRouter} from 'react-router-dom'
// import {connect} from 'react-redux'

class UserHeader extends Component {
    constructor () {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            isMenuOpen: false
        }
        this.logout = this.logout.bind(this)
    }

    logout() {
        axios.post('/api/auth/logout')
        .then(_ => {
            console.log('Logout successful.')
            this.setState ({
                first_name: '',
                last_name: '',
                email: ''
            })
            this.props.history.push('/')
        })
    }

    render() {
        // return this.props.location.pathname !== '/' &&
         return (
            <div className ='header'>
                <div className="left-header">
                    <Link to='/me' className='lobster-link'>
                        <img src={lobsterLogo} alt='lobster logo' className='logo'/>
                    </Link>
                    <Link to='/me' className='lobster-link title-link'>
                        <h1 className='title'>Rich Recipes</h1>
                    </Link>
                </div>
                <div className="right-header">
                   <nav className='nav-bar'>                       
                        <Link to='/new' className='new-link'>
                            <button className='btn header-btn'>New Recipe</button>
                        </Link>
                        <Link to='/me' className='list-link'>
                            <button className='btn header-btn'>Recipes</button>
                        </Link>
                        {/* <Link className='grocery-link'>
                            <button className='btn header-btn'>Grocery List</button>
                        </Link> */}
                            <button className='btn header-btn logout' onClick={this.logout}>Logout</button>
                    </nav>
                    <img 
                        src='https://cdn3.iconfinder.com/data/icons/toolbar-signs-5/512/menu_start_taskbar_and_window_panel_list-512.png'
                        className='hamburger' 
                        onClick={this.handleMenu}
                        alt='menu'/>
                   
                </div>
            </div>
        )
    }
}

export default withRouter(UserHeader)