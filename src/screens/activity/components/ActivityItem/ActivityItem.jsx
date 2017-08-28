import React from 'react';
import './ActivityItem.css';

export default class ActivityItem extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {

        };

        this.handleChange = this.handleChange.bind(this);
        this.returnResult = this.returnResult.bind(this);
        this.onActivityItemClick = this.onActivityItemClick.bind(this);
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

    onActivityItemClick()
    {
        console.log(this.props.place)
    }

    isAllDataLoaded() {
        return true;
    }

    returnResult() {

    }

    render() {
        return (
            <div className="col-xs-12 border margin-bottom15" onClick={this.onActivityItemClick}>
                {this.props.place.Title}
                <div className="pull-right">
                    <a className="btn btn-default">Add to I</a>
                    <a className="btn btn-default">Detail</a>
                </div>
            </div>
        )
    }
}
