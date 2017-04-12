/**
 * Created by Clyde-Desktop on 10/04/2017.
 */

import React, {Component} from 'react'
import config from '../../common/config.json';
import s from '../../../styles/main.scss'


export default class Home extends Component {
    render() {
        return (
            <div>
                <h3 className={s.border}>hello</h3>
                {config.greetText}
            </div>
        );
    }
}