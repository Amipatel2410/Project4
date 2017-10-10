import React, {Component} from 'react';
import axios from 'axios';

import { withRouter } from 'react-router';
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            email: '',
            password: '',
        };

        window.h = props.history;


        console.log(props.history);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        axios
            .post('http://localhost:3000/auth/register', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            })
            .then(res => {
                this.props.history.push('/login', {});
            })
            .catch(err => console.log(err));
        e.target.reset();
    }

    render() {
        return (
            <div className='container'>

                <form className="login-form" onSubmit={this.handleFormSubmit}>
                <h2 className="login">Register</h2>
                    <input  className="form-input" type="text" name='username' placeholder='username' value={this.state.username}onChange={this.handleInputChange}></input>
                    <input  className="form-input" type="text" name='email' placeholder='email' value={this.state.email}onChange={this.handleInputChange}></input>
                    <input  className="form-input" type="password" name='password' placeholder='password' value={this.state.password}onChange={this.handleInputChange}></input>
                    <button className="btn" type='submit'>Register</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Register);
