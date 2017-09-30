import React from 'react';
import { ActivityPage,ActivityDetailPage } from './components';
import './index.css';

export default class Plan extends React.Component {
    constructor(...args){
        super(...args);
        this.handleActivityPage = this.handleActivityPage.bind(this);
        this.redirectPage = this.redirectPage.bind(this);
        this.init = this.init.bind(this);
        this.state = {
            place:null,
            selectedPage:"ActivityPage"
        }
    }
    componentWillMount()
    {
        this.init();
    }
    init() {
        console.log(this.state.place)
    }
    renderPage() {
        switch(this.state.selectedPage){
            case "ActivityDetailPage":
                return (<ActivityDetailPage
                    handleRoute={this.redirectPage}
                    place = {this.state.place}
                ></ActivityDetailPage>);
            default:
                return(<ActivityPage handleRoute={this.redirectPage}/>);
        }
    };


    handleActivityPage() {
        this.setState({selectedPage:"ActivityPage"})
    }
    redirectPage(pageName,param){
        if(pageName=="ActivityDetailPage")
        {
            this.setState({
                selectedPage:pageName,
                place:param
            })
        }


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