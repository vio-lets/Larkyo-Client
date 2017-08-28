import React from 'react';
import './inventoryStyle.css';
import {DropdownButton} from 'react-bootstrap'

export default class Inventory extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {

        };

        this.handleChange = this.handleChange.bind(this);
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


    render() {
        return (
            <div>

                <DropdownButton id="inventory" title="Inventory">
                    <div> item </div>
                </DropdownButton>
            </div>
        )
    }
}
