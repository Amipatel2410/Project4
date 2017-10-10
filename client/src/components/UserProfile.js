import React, { Component } from 'react';

import axios from 'axios';

import { Link, Redirect } from 'react-router-dom';

class UserProfile extends Component {

  constructor() {
    super();
    this.state = {
      articleData: null,
      articleDataLoaded: false,
      fireRedirect: false,
    }
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  componentDidMount() {
    axios.get(`/articles/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          articleDataLoaded: true,
          articleData: res.data.data,
        })
      }).catch(err => console.log(err));
  }

  renderArticleOrLoading(){
    if(this.state.articleDataLoaded) {
      return(
      <div className="inner">
      <h1> Welcome user </h1>
        <div className="article_data_single">
        <h1> Title: {this.props.article.title} </h1>
        <h3> Author: {this.props.article.author} </h3>
        <p> Description: {this.props.article.description} </p>
        <a href={this.props.article.url}> Read More </a>
        <img src={this.props.article.urlToImage} alt={this.props.article.author} height="100px" width="100px"/>
        <p> PublishedAt: {this.props.article.publishedAt} </p>
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
