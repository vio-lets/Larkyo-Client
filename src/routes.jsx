import React from 'react'
import { Router, Route } from 'react-router'
import Home from './components/home/Home'
import Login from './components/login/Login'

export const routes = (
    <Route history={browserHistory} component={Home}>
        <Route path="/" component={Login} />
    </Route>
)
