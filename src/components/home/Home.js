import React from "react";
import { Link } from 'react-router';
import {Button} from 'semantic-ui-react'
import {User} from '../../models/User'


import '../../styles/home.scss' // import this component styling only, if necessary

export default class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  renderUserState()
  {
    if(User.isLogin)
    {
      return <Button
        color='red'
        content='Like'
        icon='heart'
        label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
      />
    }else{
      return <Button
        basic
        color='blue'
        content='Fork'
        icon='fork'
        label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: '1,048' }}
      />
    }

  }

  render() {
    return (
      <div className="">
        <h1 className="">Home Page</h1>
        <Link to="/about" className="btn btn-default">About page &rarr;</Link>
        <Link to="/login" className="btn btn-default">Login page &rarr;</Link>
        {this.renderUserState()}
        {User.isLogin? <Button primary>Primary</Button>:<Button secondary>Secondary</Button>}
      </div>

    );
  }
}
