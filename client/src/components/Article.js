import React, { Component } from 'react';

import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class Article extends Component {

  constructor(props) {

    super(props);
    this.state = {
    title:  this.props.article.title,
    author: this.props.article.author,
    description: this.props.article.description,
    url: this.props.article.url,
    urlToImage: this.props.urlToImage,
    publishedAt: this.props.publishedAt,
    fireRedirect: false,
    };
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('http://localhost:3000/articles', {
        title: this.state.title,
        author: this.state.author,
        description: this.state.description,
        url: this.state.url,
        urlToImage: this.state.urlToImage,
        publishedAt: this.state.publishedAt
      })
      .then(res => {
        console.log(res);
        this.setState({
          newId: res.data.data.id,
          fireRedirect: true,
        });
      }).catch(err => console.log(err));
      e.target.reset();
  }

  render(){
    return (
      <div className="main_article-data">
        <div className="article_data">
        <h1> Title: {this.props.article.title} </h1>
        <h3> Author: {this.props.article.author} </h3>
        <p> Description: {this.props.article.description} </p>
        <a href={this.props.article.url}> Read More </a>
        <img src={this.props.article.urlToImage} alt={this.props.article.author} height="100px" width="100px"/>
        <p> PublishedAt: {this.props.article.publishedAt} </p>
        </div>

        <form onSubmit={(e) => this.handleSubmit(e) }>

                    <input type='hidden' name='title' value={this.props.article.title} />
                    <input type='hidden' name='author' value={this.props.article.author} />
                    <input type='hidden' name='description' value={this.props.article.description}/>
                    <input type='hidden' name='url' value={this.props.article.url} />
                    <input type='hidden' name='urlToImage' value={this.props.article.urlToImage} />
                    <input type='hidden' name='publishedAt' value={this.props.publishedAt} />
                    <input type='submit' placeholder='Add News To Your Account' />
        </form>

          {this.state.fireRedirect
          ? <Redirect push to={`/UserProfile/${this.state.newId}`} />
          : ''}

      </div>
      );
  }

}

export default Article;
