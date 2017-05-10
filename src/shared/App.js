import React from 'react';
import {Sidebar, Menu, Segment,Label} from 'semantic-ui-react'

import Topbar from './components/Topbar'
import SideMenu from './components/SideMenu'
import {User} from '../models/User'

export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.toggleSidebarVisibility=this.toggleSidebarVisibility.bind(this)
    this.state = { visible: false }
  }

  componentWillMount() {
    this.initData();

  }

  initData() {
    let token = localStorage.getItem('passport');
    if(token)
    {
        //TODO check toke is vaild
      User.hasToken = true;
      User.isLogin = true;
    }else{
      User.hasToken = false;
      User.isLogin = false;
    }
  }

  toggleSidebarVisibility(){
    this.setState({ visible: !this.state.visible })
  }
  render() {
    const { visible } = this.state
    return (
      <div className="height100">
        <Topbar toggleSidebar={this.toggleSidebarVisibility}></Topbar>
        <div id="main-container" className="height100 padding-top20">
          <Sidebar.Pushable>
            <Sidebar as={Menu} className="sidebarMenu" animation='overlay' visible={visible} vertical>

              <SideMenu></SideMenu>
            </Sidebar>
            <Sidebar.Pusher>
              <div className="container-fluid height100">
                {React.cloneElement(this.props.children, {...this.props})}
              </div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    )
  }
}
