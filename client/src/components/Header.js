import React, { Component } from 'react'
import Login from './auth/Login'
import Register from './auth/Register'
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
        return(
            <div className='navBar'>
                <span>

                    <span className="title_logo">
                    <img src={require('./images/n1.jpg')}  height="100px" width="300px" />
                    </span>

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
