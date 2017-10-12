import React, { Component } from 'react'
import Login from './auth/Login'
import Register from './auth/Register'
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return(
            <div className='navBar'>
                <span>
                    <h1><span className="title_logo">Article World</span></h1>
                    <div className="nav_links">
                    <Link to='/'>Home</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/'>Logout</Link>
                    </div>
                </span>

            </div>

        )
    }
}

export default Header;
