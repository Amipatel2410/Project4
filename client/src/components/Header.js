import React, { Component } from 'react'
import Login from './auth/Login'
import Register from './auth/Register'
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return(
            <div className='navBar'>
                <span>
                    <h1><span className="title">Article World</span></h1>
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to='/register'>Register</Link><Register /></div>
                    <div><Link to='/login'>Login</Link><Login /></div>
                </span>

            </div>

        )
    }
}

export default Header;
