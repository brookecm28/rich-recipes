import React, {Component} from 'react'
// import axios from 'axios'
// import {connect} from 'react-redux'
import LandingHeader from '../Header/Landing-Header'
import '../Auth/Auth.css'

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errorMsg: ''
        }
    }

    render() {
        return (
            <div className='auth'>
                <LandingHeader />
                <div className='login-container'>
                    <input className='inputs top' placeholder='Email'></input>
                    <input className='inputs' placeholder='Password'></input>
                    <button className='btn login'>Login</button>
                </div>
            </div>
        )
    }
}

export default Auth