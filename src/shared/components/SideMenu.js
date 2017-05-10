import React from "react";
import {Link} from "react-router";
import {Menu, Card, Image, Label, Segment} from 'semantic-ui-react'
import {Radar} from 'react-chartjs'
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
    const chartData = {
      labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
      datasets: [
        {
          label: "Role",
          backgroundColor: "rgba(125,234,208,0.2)",
          data: [65, 59, 90, 81, 56, 55, 40]
        }
      ]
    };
    return (
      <div>
        <div className="user-avatar">
          <Label as='a' color='teal' className="user-credit" ribbon='right'>
            <i className="fa fa-id-card-o"/>
            &nbsp; 800 Credits</Label>
          <h3>
            Clyde Shen &nbsp;<sub><i className="fa fa-mars blue-text"></i></sub>
          </h3>
          <Image src='http://placehold.it/350x350' fluid/>
        </div>

        <div className="margin-top10">
          <span className="user-tag">Featured</span>
          <span className="user-tag">Featured</span>
          <span className="user-tag">Featured</span>
        </div>

        <div className="margin-top15">
          <Radar data={chartData} width="260"/>
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
