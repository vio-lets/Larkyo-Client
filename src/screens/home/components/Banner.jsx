import React from 'react'
import {Jumbotron} from '../../../components'
import logo from './logo.svg';
import '../css/style.css'

class Banner extends React.Component {
    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>Welcome to Larkyo</h1>
                    <p>This area will be replaced by a video I suppose</p>
                </Jumbotron>
            </div>
        )
    }
}

export default Banner