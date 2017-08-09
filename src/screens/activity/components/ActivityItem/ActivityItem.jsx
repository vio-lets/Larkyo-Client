import React from 'react';
import './ActivityItem.css';

export default class ActivityItem extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {

        };

        this.handleChange = this.handleChange.bind(this);
        this.returnResult = this.returnResult.bind(this);
        this.isAllDataLoaded = this.isAllDataLoaded.bind(this);
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

    isAllDataLoaded() {
        return true;
    }

    returnResult() {

    }

    render() {
        return (
            <div className="col-xs-12 border margin-bottom15">
                {this.props.place.Title}
            </div>
        )
    }
}
