import React from 'react';
import {Button} from "semantic-ui-react"
class LogInOut extends React.Component{
    constructor (...args) {
        super(...args);
        this.state={
            isLogin:false
        }
    }




    render() {
        const {isLogin} = this.state
        return (
            <div>
                {isLogin?
                    <div>
                        123
                    </div>:
                    <div>
                        <Button.Group>
                            <Button onClick={this.props.onRegisterBtnClick}>Register</Button>
                            <Button.Or/>
                            <Button onClick={this.props.onSignInBtnClick}>Sign In</Button>
                        </Button.Group>
                    </div>
                }
            </div>

        )
    }
}

export default LogInOut