import React, {Component} from 'react'
import LandingHeader from '../Header/Landing-Header'
import '../Auth/Register.css'
import axios from 'axios'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
        this.register = this.register.bind(this)
    }

    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }

    register() {
        axios.post('/api/auth/register', this.state)
        .then(res => {
            this.props.history.push('/me')
        })
        .catch(err => {
            console.log(err)
            alert('An account is already registered this that email.')
            this.setState ({
                email: '',
                password: ''
            })
        })
    }

    render() {
        return (
            <div className='register'>
                <LandingHeader />
                <div className='create-container'>
                    <input 
                      className='inputs top' 
                      placeholder='First Name'
                      value={this.state.first_name}
                      onChange={e => this.handleChange('first_name', e.target.value)}>
                    </input>
                    <input 
                      className='inputs' 
                      placeholder='Last Name'
                      value={this.state.last_name}
                      onChange={e => this.handleChange('last_name', e.target.value)}>
                    </input>
                    <input 
                      className='inputs' 
                      placeholder='Email'
                      value={this.state.email}
                      onChange={e => this.handleChange('email', e.target.value)}>
                    </input>
                    <input 
                      className='inputs' 
                      placeholder='Password'
                      type='password'
                      value={this.state.password}
                      onChange={e => this.handleChange('password', e.target.value)}>
                    </input>
                    <button className='btn create' onClick={this.register}>Create Account</button>
                </div>
            </div>
        )
    }
}

export default Register