import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/home';
import LoginForm from './screens/authentication';
import { NavigationBar } from './components';
import createBrowserHistory from 'history/createBrowserHistory';
import Team from './screens/team/index';
import Plan from './screens/plan/index';

const RouteWithSubRoute = (route) => (
    <Route path={route.path} exact={route.exact} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
);

class App extends React.Component {
    constructor (props) {
        super(props);
        console.log(props);

        this.state = {
            userLoggedIn: true
        };
        this.onUserStateChange = this.onUserStateChange.bind(this);
    }

    onUserStateChange (userState) {
        this.setState({
            userLoggedIn: userState
        });
    }

    render () {
        const history = createBrowserHistory();
        return (
            <Router history={history}>
                <div>
                    <NavigationBar userLoggedIn={this.state.userLoggedIn} loginStateHandler={this.onUserStateChange}/>

                    <div className="container">
                        <Switch>
                            <Route exact path="/" render={() => {
                                return (this.state.userLoggedIn ? <Home/> : <div>Not logged in</div>);
                            }}/>
                            <Route path="/plan" component={Plan}/>
                            <Route exact path="/signin" render={() => {
                                return <LoginForm handleLoginState={this.onUserStateChange}/>;
                            }}/>
                            <Route exact path="/signout" render={() => {
                                this.setState({userLoggedIn: false});
                            }}/>
                            <Route path="/team" component={Team}/>
                            <Route path="/plan" component={Plan}/>

                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;