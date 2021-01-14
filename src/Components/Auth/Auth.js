import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import LandingHeader from '../Header/Landing-Header'
import '../Auth/Auth.css'
import {updateUser} from '../../Redux/Reducer'

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.login = this.login.bind(this)
    }
   
    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }

    login() {
        axios.post('/api/auth/login', this.state)
        .then(res => {
            // this.props.updateUser({
            //     email: res.data.email, //will potentially need to add other info here
            // })
            console.log('login successful')
        this.props.history.push('/me')
        this.props.updateUser({
            id: res.data.id,
            first_name: res.data.first_name,
            email: res.data.email
        })
        }).catch(err => {
            console.log(err)
            alert('Incorrect email or password.')
            this.setState ({
                email: '',
                password: ''
            })
        })
    }

    render() {
        return (
            <div className='auth'>
                <LandingHeader />
                <div className='login-container'>
                    <input 
                      className='inputs top' 
                      placeholder='Email' 
                      value={this.state.email}
                      onChange={e => this.handleChange('email', e.target.value)}>
                    </input>
                    <input 
                      className='inputs' 
                      placeholder='Password' 
                      value={this.state.password}
                      type='password'
                      onChange={e => this.handleChange('password', e.target.value)}>
                    </input>
                    <button className='btn login' onClick={this.login}>Login</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {updateUser}) (Auth)