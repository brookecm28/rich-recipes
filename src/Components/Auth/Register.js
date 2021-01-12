import React, {Component} from 'react'
// import axios from 'axios'
// import {connect} from 'react-redux'
import LandingHeader from '../Header/Landing-Header'
import '../Auth/Register.css'

class Register extends Component {
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
            <div className='register'>
                <LandingHeader />
                <div className='create-container'>
                    <input className='inputs top' placeholder='First Name'></input>
                    <input className='inputs' placeholder='Last Name'></input>
                    <input className='inputs' placeholder='Email'></input>
                    <input className='inputs' placeholder='Password'></input>
                    <button className='btn create'>Create Account</button>
                </div>
            </div>
        )
    }
}

export default Register