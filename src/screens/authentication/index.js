import React from 'react';
import { LoginPage } from './components';

class Authentication extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <LoginPage handleLoginState={this.props.handleLoginState}/>
        );
    }
}

export default Authentication;