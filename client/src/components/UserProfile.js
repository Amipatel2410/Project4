import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import cookies from 'cookies-js';

class UserProfile extends Component {

  constructor() {
    super();
    this.state = {
      articleData: '',
      articleDataLoaded: false,
      fireRedirect: false,
    }

    this.deleteArticles = this.deleteArticles.bind(this);
  }

  componentDidMount() {
    let headers = {
      'access-token': cookies.get('access-token'),
      'client': cookies.get('client'),
      'token-type': cookies.get('token-type'),
      'uid': cookies.get('uid'),
      'expiry': cookies.get('expiry')
    };
    axios.get(
      `http://localhost:3000/articles?user_id=${this.props.match.params.id}`,
      { headers: headers }
    )
    .then(res => {
      console.log(res.data);
      this.setState({
        articleDataLoaded: true,
        articleData: res.data,
      })
    })
    .catch(err => console.log(err));
  }

  deleteArticles(){
    axios.delete(`/articles/${this.props.match.params.id}`)
      .then(res => {
        console.log(res);
        this.setState({
          fireRedirect: true,
        });
      }).catch(err => {
        console.log(err);
      });
  }

  renderArticleOrLoading(){
    if(this.state.articleDataLoaded) {
      return(
      <div className="inner">
      <h1> Welcome user </h1>
        <div className="article_data_single">
        <h1> {this.state.articleData.title} </h1>
        <h3> {this.state.articleData.author} </h3>
        <p>  {this.state.articleData.description} </p>
        <a href={this.state.articleData.url}> Read More </a>
        <img src={this.state.articleData.urlToImage} height="100px" width="100px"/>
        <p>  {this.state.articleData.publishedAt} </p>
        </div>
        <div>
            <span className="delete" onClick={this.deleteArticles}> Delete </span>
        </div>
      </div>
        )
    } else return <p className="loading"> Loading... </p>
  }

  render() {
    return (
        <div className="article-single">
          {this.renderArticleOrLoading()}
        </div>
      )
  }

}

export default UserProfile;
