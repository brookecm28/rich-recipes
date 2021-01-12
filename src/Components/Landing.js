import React from 'react'
import LandingHeader from './Header/Landing-Header'
import '../Components/Landing.css'
// import {connect} from 'react-redux'

function Landing() {
    return (
        <div className='page'>
            <LandingHeader />
            <div>
                <h1 className='slogan'>Something about recipes.</h1>
                <div className='info'>
                    <p>some other stuff</p>
                    <p>some other other stuff</p>
                </div>
            </div>
        </div>
    )
}

export default Landing