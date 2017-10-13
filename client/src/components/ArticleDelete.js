import React, { Component } from 'react';
import axios from 'axios';
import cookies from 'cookies-js';


class ArticleDelete extends Component {

constructor(props)
{
  super(props);
  this.deleteArticles = this.deleteArticles.bind(this);
}


deleteArticles(){
    let headers = {
      'access-token': cookies.get('access-token'),
      'client': cookies.get('client'),
      'token-type': cookies.get('token-type'),
      'uid': cookies.get('uid'),
      'expiry': cookies.get('expiry')
    };
    axios.delete(`/articles/${this.props.article.id}` ,
      { headers: headers}
      )
      .then(res => {
        console.log(res);
        this.props.deletePage();
      }).catch(err => {
        console.log(err);
      });
  }

render() {
  return (

          <div>
            <h1>{this.props.article.title} </h1>
               <h3> {this.props.article.author} </h3>
               <p> {this.props.article.description} </p>
                <a href={this.props.article.url}> Read More </a>
                <img src={this.props.article.urlToImage} height="200px" width="200px" />
                <h4> {this.props.article.publishedAt} </h4>

          <div className="for_delete">

               <button type="submit" onClick={this.deleteArticles}> Delete </button>

          </div>

          </div>

    );
}


}

export default ArticleDelete;
