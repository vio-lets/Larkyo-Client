import React from 'react'
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import Home from './screens/home'
import {NavigationBar} from './components'

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    );
};

class Plan extends React.Component {
    render() {
        return (
            <div>
                <h1>This is Plan page</h1>
            </div>
        )
    }
}

class Team extends React.Component {
    render() {
        return (
            <div>
                <h1>This is Team page</h1>
            </div>
        )
    }
}

const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/plan",
        component: Plan
    }
]

const RouteWithSubRoute = (route) => (
    <Route path={route.path} exact={route.exact} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
);


class App extends React.Component {
    render() {
        return (
            <Router history="/">
                <div>
                    <NavigationBar/>

                    {/*<div className="content">*/}
                    {/*{routes.map((route, i) => (*/}
                    {/*<RouteWithSubRoute key={i} exact={route.exact} {...route}/>*/}
                    {/*))}*/}
                    {/*</div>*/}

                    <div className="container">
                        <Route exact path="/" component={Home}/>
                        <Route path="/plan" component={Plan}/>
                        <Route path="/team" component={Team}/>
                    </div>
                </div>
            </Router>
        )
    }
}


render(App);

if (module.hot) {
    module.hot.accept('./', () => {
        render(App)
    })
}