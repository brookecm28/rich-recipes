import React from 'react'
import LandingHeader from './Header/Landing-Header'
import '../Components/Landing.css'
import lobsterLogo from '../../src/assets/blue-lobster-logo.png'

function Landing() {
    return (
        <div className='page'>
            <LandingHeader />
            <div className='landing-body'>
                <h1 className='slogan'>Storing recipes so you don't have to.</h1>
                <div className='info'>
                    <p className='landing-para para-left'>Spilled sauce on your favorite recipe card? Can't find Grandma's recipe? Don't worry about that anymore! Store all your recipes here.</p>
                    <img className='lobster' src={lobsterLogo} alt='Richie the Lobster' />
                    <p className='landing-para para-right'>Can't decide what to eat? We've got you covered! Just take a look at your list and see what looks good.</p>
                </div>
            </div>
        </div>
    )
}

export default Landing