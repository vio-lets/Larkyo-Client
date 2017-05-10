import React from 'react'
import {Banner, Destinations} from './components'

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Banner />
                    <Destinations/>
                </div>
            </div>
        )
    }
}

