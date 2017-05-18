import React from 'react';
import {Menu} from 'semantic-ui-react';
import LoginForm from '../LoginForm/LoginForm.jsx'
import SignupForm from '../SignupForm/SignupForm.jsx'

class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {activeItem: 'login'}
        this.handleItemClick = this.handleItemClick.bind(this);

    }
    handleItemClick(e, {name}) {
        this.setState({activeItem: name})
    }
    switchLoginOrSignup()
    {
        switch (this.state.activeItem) {
            case 'sign up':
                return <SignupForm/>
                break;
            default:
                return <LoginForm/>
                break;
        }
    }

    render(){
        const {activeItem} = this.state
        return(
            <div className="col-xs-12">
                <div className="col-xs-6">
                    <img src="http://placehold.it/350x350" alt=""/>
                </div>
                <div className="col-xs-6">
                    <Menu pointing secondary>
                        <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}></Menu.Item>
                        <Menu.Item name='sign up' active={activeItem === 'sign up'} onClick={this.handleItemClick}></Menu.Item>
                    </Menu>
                    {this.switchLoginOrSignup(activeItem)}
                </div>
                
            </div>
            
        )
    }
}

export default LoginPage
