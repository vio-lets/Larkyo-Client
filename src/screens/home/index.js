import React from 'react'
import { Banner, NavigationBar } from './components'
import { Button, ButtonToolbar } from 'react-bootstrap'

export default class Home extends React.Component {

  render () {
    return (
      <div>
        <div className="container">
          <NavigationBar/>

          <Banner />
        </div>
      </div>
    )
  }
}

