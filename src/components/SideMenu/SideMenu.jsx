import React from "react";
import {Menu, Card, Image, Label, Segment} from 'semantic-ui-react'

export default class SideMenu extends React.Component {


    constructor(props) {
        super(props);
        this.state = {activeItem: 'option'}
        this.handleItemClick = this.handleItemClick.bind(this)
        this.switchMenuOption = this.switchMenuOption.bind(this)
    }

    handleItemClick(e, {name}) {
        this.setState({activeItem: name})
    }

    switchMenuOption(activeItem) {
        switch (activeItem) {
            case 'messages':
                return this.messagesBox();
                break;
            case 'coming events':
                return this.comingEvent();
                break;
            default:
                return this.optionMenu();
                break;
        }
    }

    optionMenu() {
        return (
            <div>
                <Menu.Item name='Profile'>
                    User Profile
                </Menu.Item>
                <Menu.Item name='Profile'>
                    Wish List
                </Menu.Item>
                <Menu.Item name='Profile'>
                    History
                </Menu.Item>
                <Menu.Item name='Profile'>
                    Credit
                </Menu.Item>
            </div>
        )
    }

    messagesBox() {
        return (
            <div className="messageBox">
                messageBox
            </div>
        )
    }

    comingEvent() {
        return (
            <div className="coming-event">
                coming events
            </div>
        )
    }

    render() {
        const {activeItem} = this.state
        return (
            <div>
                <div className="user-avatar">

                </div>

                <Menu pointing secondary>
                    <Menu.Item name='menu' active={activeItem === 'menu'} onClick={this.handleItemClick}></Menu.Item>
                    <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>
                    </Menu.Item>
                    <Menu.Item name='coming events' active={activeItem === 'coming events'} onClick={this.handleItemClick}>
                    </Menu.Item>
                </Menu>
                {this.switchMenuOption(activeItem)}
            </div>
        );
    }
}
