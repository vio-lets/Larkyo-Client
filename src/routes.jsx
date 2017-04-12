import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DefaultLayout from './components/shared/DefaultLayout'
import Home from './components/home/Home'
import Login from './components/login/Login'
import AboutUs from './components/aboutus/AboutUs'
import ContactUs from './components/contactus/ContactUs'

export default class Routes extends Component {
    render() {
        return (

            <DefaultLayout>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="login" component={Login}></Route>
                    <Route path="aboutus" component={AboutUs}></Route>
                    <Route path="contactus" component={ContactUs}></Route>
                </Switch>
            </DefaultLayout>

        );
    }
}



