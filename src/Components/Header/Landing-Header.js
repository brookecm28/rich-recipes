import React from 'react'
import style from './LandingHeaderStyles'
import './LandingHeader.css'
import lobsterLogo from './../../assets/blue-lobster-logo.png'
import {Link, withRouter} from 'react-router-dom'

const LandingHeader = props => {
    return (
                <div className ='header' style={style.header}>
                    <div className="left-header"style={style.leftHeader}>
                        <Link to='/' className='lobster-link' style={style.lobsterLink}>
                            <img src={lobsterLogo} alt='lobster logo' className='logo' style={style.logo}/>
                        </Link>
                        <Link to='/' className='title-link' style={style.lobsterLink}>
                            <h1 className='title' style={style.title}>Rich Recipes</h1>
                        </Link>
                    </div>
                    <div className="right-header" style={style.rightHeader}>
                        <nav style={style.nav}>
                            <Link to='/register' className='register-link' style={style.registerLink}>
                                <button className='btn header-btn' style={style.headerBtn}>Join</button>
                            </Link>
                            <Link to='/auth' className='login-link' style={style.loginLink}>
                                <button className='btn header-btn' style={style.headerBtn}>Login</button>
                            </Link>
                        </nav>
                    </div>
                </div>
            )
}

export default withRouter(LandingHeader)