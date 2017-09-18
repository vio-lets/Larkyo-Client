import React from 'react';
import './ActivityItem.css';
import globalState from './../../../../utility/globalState';
import {Link} from 'react-router-dom'

export default class ActivityItem extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.returnResult = this.returnResult.bind(this);
        this.onActivityItemClick = this.onActivityItemClick.bind(this);
        this.isAllDataLoaded = this.isAllDataLoaded.bind(this);
        this.goToDetailPage = this.goToDetailPage.bind(this);
        globalState.setGlobalState = globalState.setGlobalState.bind(this)
        this.init = this.init.bind(this);
        this.init();
    }

    init() {

    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value}, this.returnResult);

    }

    onActivityItemClick() {
        let inventoryItem = globalState.getGlobalState('inventory')
        if (!inventoryItem) inventoryItem = [];

        let index = inventoryItem.findIndex((act)=> {
            return act.Id == this.props.place.Id
        })
        if (index == -1) {
            inventoryItem.push(this.props.place);
        }
        let inventory = {inventory: inventoryItem}
        globalState.setGlobalState(inventory)
    }

    isAllDataLoaded() {
        return true;
    }

    goToDetailPage() {
        this.props.navigate("ActivityDetailPage", this.props.place)
    }

    returnResult() {

    }

    render() {
        return (
            <div className="col-xs-12 border margin-bottom15">
                {this.props.place.Title}
                <div className="pull-right">
                    <a className="btn btn-default" onClick={this.onActivityItemClick}>Add to Inventory</a>
                    <a className="btn btn-default" onClick={this.goToDetailPage}>Detail</a>
                </div>
            </div>
        )
    }
}
