import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/home';
import LoginForm from './screens/authentication';
import { NavigationBar } from './components';
import createBrowserHistory from 'history/createBrowserHistory';

class Plan extends React.Component {
    render () {
        return (
            <div>
                <h1>This is Plan page</h1>
            </div>
        );
    }
}

class Team extends React.Component {
    render () {
        return (
            <div>
                <h1>This is Team page</h1>
            </div>
        );
    }
}

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/plan',
        component: Plan
    }
];

const RouteWithSubRoute = (route) => (
    <Route path={route.path} exact={route.exact} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
);

class App extends React.Component {
    render () {
        const history = createBrowserHistory();
        return (
            <Router history={history}>
                <div>
                    <NavigationBar />

                    {/*<div className="content">*/}
                    {/*{routes.map((route, i) => (*/}
                    {/*<RouteWithSubRoute key={i} exact={route.exact} {...route}/>*/}
                    {/*))}*/}
                    {/*</div>*/}

                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/plan" component={Plan}/>
                            <Route path="/team" component={Team}/>
                            <Route exact path="/signin" component={LoginForm}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;