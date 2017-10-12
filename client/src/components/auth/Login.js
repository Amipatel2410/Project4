import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import cookies from 'cookies-js';

class Login extends Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: '',
            fireRedirect: false,
            auth: false,
            userId:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        //this.handleDeleteuser = this.handleDeleteuser.bind(this);
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
        .post('http://localhost:3000/auth/sign_in', {
            email: this.state.email,
            password: this.state.password,
        })
        .then(res => {
          cookies.set('access-token', res.headers["access-token"]);
          cookies.set('client', res.headers["client"]);
          cookies.set('token-type', res.headers["token-type"]);
          cookies.set('uid', res.headers["uid"]);
          cookies.set('expiry', res.headers["expiry"]);

          console.log(res, 'this is res');

          if(res.data.data.email) {
            this.setState({
              auth: true,
              fireRedirect: true,
              userId: res.data.data.id,
            });
            // this.props.onLogin({
            //   accessToken: res.headers["access-token"],
            //   client: res.headers["client"],
            //   tokenType: res.headers["token-type"],
            //   uid: res.headers["uid"],
            //   expiry: res.headers["expiry"]
            // })
            console.log(this.state,'this is the state')
          }
        })
        .catch(err => console.log(err));
        e.target.reset();
    }

    // handleDeleteuser(e) {
    //   axios.delete('http://localhost:3000/auth/sign_out')
    //       .then(res => {
    //         console.log(res);
    //         this.setState({
    //           fireRedirect: true,
    //         });
    //       }).catch(err => {
    //         console.log(err);
    //       });
    // }




        render(){

        return(
            <div className='container'>
                <h1 className="login">Login</h1>
                <form className="login-form" onSubmit={(e) => this.handleFormSubmit(e)}>

                    <input className="form-input" type='text' name='email' placeholder='Email' value={this.state.email} onChange={this.handleInputChange}></input>
                    <input className="form-input"  type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleInputChange}></input>
                    <button className="btn" type='submit'>Login</button>
                </form>

                <span className="for_logout" onClick={this.handleDeleteuser}>Logout</span>
                {this.state.fireRedirect
                ? <Redirect push to="/" />
                : ''}

                {this.state.fireRedirect
          ? <Redirect push to={`/UserProfile/${this.state.userId}`} />
          : ''}
            </div>


        )
    }
}

export default Login;
