import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from '../components/home/Home';
import AboutPage from '../components/about-us/AboutUs';
import Login from '../components/login/Login';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="login" component={Login} />
  </Route>
);
