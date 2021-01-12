import React, {Component} from 'react'
// import axios from 'axios'
// import {connect} from 'react-redux'
import LandingHeader from '../Header/Landing-Header'

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
                <input className='inputs' placeholder='Email'></input>
                <input className='inputs' placeholder='Password'></input>
            </div>
        )
    }
}

export default Auth