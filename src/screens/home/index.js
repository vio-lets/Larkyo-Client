import React from 'react';
import { Banner, Destinations } from './components';

export default class Home extends React.Component {
    constructor(...args){
        super(...args);
    }
    render () {
        return (
            <div>
                <div>
                    <Banner />
                    <Destinations/>
                </div>
            </div>
        );
    }
}

