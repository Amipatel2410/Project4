
import React, {Component} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

class Login extends Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            fireRedirect: false,
            auth: false
        };
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
              .post('http://localhost:3000/auth/login', {
                  username: this.state.username,
                  password: this.state.password,
              })
              .then(res => {
                  console.log(res);
                  if(res.data.auth){
                  this.setState({
                      auth: true,
              });
            }
      })
        .catch(err => console.log(err));
              e.target.reset();
    }


      handleRedirect(){
        if (this.state.auth){
          return this.props.history.push('/UserProfile')
        }
      }

        render(){

        return(
            <div className='container'>
                <h1 className="login">Login</h1>
                <form className="login-form" onSubmit={(e) => this.handleFormSubmit(e)}>

                    <input className="form-input" type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleInputChange}></input>
                    <input className="form-input"  type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInputChange}></input>
                    <button className="btn" type='submit'>Login</button>
                </form>

            </div>
        )
    }
}

export default withRouter(Login);
