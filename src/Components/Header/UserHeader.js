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
            email: ''
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
                    <Link className='lobster-link'>
                        <img src={lobsterLogo} alt='lobster logo' className='logo'/>
                    </Link>
                    <Link className='lobster-link'>
                        <h1 className='title'>Rich Recipes</h1>
                    </Link>
                </div>
                <div className="right-header">
                    <nav>
                        <Link className='new-link'>
                            <button className='btn'>New Recipe</button>
                        </Link>
                        <Link className='list-link'>
                            <button className='btn'>Recipes</button>
                        </Link>
                        {/* <Link className='grocery-link'>
                            <button className='btn'>Grocery List</button>
                        </Link> */}
                        <Link className='logout-link'>
                            <button className='btn' onClick={this.logout}>Logout</button>
                        </Link>
                    </nav>
                </div>
            </div>
        )
    }
}

export default withRouter(UserHeader)