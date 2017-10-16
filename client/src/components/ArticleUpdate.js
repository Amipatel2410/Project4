import React, { Component } from 'react';
import axios from 'axios';
import cookies from 'cookies-js';

class ArticleUpdate extends Component {

constructor(props)
{
  super(props);
  this.state = {
    title: '',
    author: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
  }
  this.updateArticles = this.updateArticles.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
}


handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {
    let headers = {
      'access-token': cookies.get('access-token'),
      'client': cookies.get('client'),
      'token-type': cookies.get('token-type'),
      'uid': cookies.get('uid'),
      'expiry': cookies.get('expiry')
    };
    console.log(this.props.match.params.id);
    axios.get(`/articles/${this.props.match.params.id}`,
        {headers: headers}
      )
      .then((res) => {
        const article = res.data;
        this.setState({
          title: article.title,
          author: article.author,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage,
          publishedAt: article.publishedAt,
        })
        console.log(article);
      }).catch(err => console.log(err));
  }



  updateArticles() {
    let headers = {
      'access-token': cookies.get('access-token'),
      'client': cookies.get('client'),
      'token-type': cookies.get('token-type'),
      'uid': cookies.get('uid'),
      'expiry': cookies.get('expiry')
    };
    axios.put(`/articles/${this.props.match.params.id}` ,
      {
        title: this.state.title,
        author: this.state.author,
        description: this.state.description,
        url: this.state.url,
        urlToImage: this.state.urlToImage,
        publishedAt: this.state.publishedAt
      },
      { headers: headers }
      )
      .then(res => {
        console.log(res);
        this.setState({
          newId: res.data.id,
        });

      }).catch(err => {
        console.log(err);
      });
  }

  render(){
    return(
        <div className="edit">
            <form onSubmit={this.updateArticles}>

              <label> Title:
              <input
              type="text"
              placeholder="title"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange} />
              </label>
              <br />
              <label> Description:
              <input
              type="text"
              placeholder="description"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange} />
              </label>
              <br />
              <label> Author:
              <input
              type="text"
              placeholder="author"
              name="author"
              value={this.state.author}
              onChange={this.handleInputChange} />
              </label>
              <br />
              <label> Url:
              <input
              type="text"
              placeholder="url"
              name="url"
              value={this.state.url}
              onChange={this.handleInputChange} />
              </label>
              <br />
              <label> urlToImage:
              <input
              type="text"
              placeholder="urlToImage"
              name="urlToImage"
              value={this.state.urlToImage}
              onChange={this.handleInputChange} />
              </label>
              <br />
              <label> publishedAt
              <input
              type="text"
              placeholder="publishedAt"
              name="publishedAt"
              value={this.state.publishedAt}
              onChange={this.handleInputChange} />
              </label>
              <br />
              <input type="submit" value="Submit!" />
            </form>
        </div>
      );
  }







}


export default ArticleUpdate;
