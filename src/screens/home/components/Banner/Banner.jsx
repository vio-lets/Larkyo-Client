import React from 'react';
import logo from './logo.svg';
import './Banner.css';
import { Jumbotron } from 'react-bootstrap';

class Banner extends React.Component {
    render () {
        return (
            <div className="container">
                <Jumbotron>

                    <h1>Welcome to Larkyo!</h1>
                    <p>What do you want to do today?</p>
                </Jumbotron>
            </div>
        );
    }
}

export default Banner;