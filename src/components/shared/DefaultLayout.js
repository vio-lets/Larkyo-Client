/**
 * Created by Clyde-Desktop on 11/04/2017.
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import style from './../../../styles/main.scss'

class DefaultLayout extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className={style.border}>
                    body
                </div>
                <Footer/>
            </div>
        );
    }
}

export default DefaultLayout