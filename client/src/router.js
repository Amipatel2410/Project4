import React from 'react';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import UserProfile from './components/UserProfile';
import { BrowserRouter, Route } from 'react-router-dom';

export default (
  <BrowserRouter>
    <div className='router'>


      <Route exact path='/' component={App} />
      <Route exact path='/ArticleList' component = {ArticleList} />
      <Route exact path='/Article' component = {Article} />
      <Route exact path='/UserProfile' component = {UserProfile} />


    </div>
  </BrowserRouter>
)



