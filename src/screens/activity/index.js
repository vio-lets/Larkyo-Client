import React from 'react';
import { ActivityPage } from './components';
import './index.css';

export default class Plan extends React.Component {
    constructor(...args){
        super(...args);
        this.handleActivityPage = this.handleActivityPage.bind(this);
        this.redirectPage = this.redirectPage.bind(this);
        this.state = {
            selectedPage:"ActivityPage"
        }
    }

    renderPage() {
        switch(this.state.selectedPage){
            default:
                return(<ActivityPage handleRoute={this.redirectPage}/>);
        }
    };


    handleActivityPage() {
        this.setState({selectedPage:"ActivityPage"})
    }
    redirectPage(pageName){
        this.setState({selectedPage:pageName})
    }

    render () {
        return (
            <div className="row">
                <div className="col-md-3 ">
                    <div className="optionListContainer">
                        <ul className="list-group">
                            <li className="list-group-item"><a href="#" onClick={this.handleActivityPage}>Activity Page</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    {this.renderPage()}
                </div>
            </div>
        );
    }
}