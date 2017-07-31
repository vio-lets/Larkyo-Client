import React from 'react';
import DestinationFilter from './../DestinationFilter/DestinationFilter.jsx'
import './ActivityPage.css';

export default class ActivityPage extends React.Component {
    render() {
        return (
            <div>
                <DestinationFilter/>
                <h2>Coming Soon!</h2>
            </div>
        )
    }
}