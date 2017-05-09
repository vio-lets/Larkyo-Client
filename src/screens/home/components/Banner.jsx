import React from 'react'
import { Jumbotron } from '../../../components'
// import logo from '../../../logo.svg';

class Banner extends React.Component {
  render () {
    return (
      <Jumbotron>
        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
        <h1>Welcome to Larkyo</h1>
        <p>This is some text</p>
      </Jumbotron>
    )
  }
}

export default Banner