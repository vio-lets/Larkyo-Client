import React from 'react';
import './inventoryStyle.css';
import {DropdownButton} from 'react-bootstrap'
import globalState from './../../utility/globalState';

export default class Inventory extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
            activityItemList: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.updateInventory = this.updateInventory.bind(this);
        this.init = this.init.bind(this);
        globalState.addEventListener(this.updateInventory);
    }

    componentWillMount() {
        this.init();
    }
    componentDidMount()
    {
        let inventory = {inventory: this.state.activityItemList}
        globalState.setGlobalState(inventory)
    }
    init() {
        let inventoryItem = localStorage.getItem('inventory')
        if (!inventoryItem) {
            inventoryItem = [];
        } else {
            inventoryItem = JSON.parse(inventoryItem);
        }

        this.setState({activityItemList: inventoryItem})
    }

    updateInventory() {
        let activityItemList = globalState.getGlobalState('inventory')
        this.setState({activityItemList: activityItemList})
        localStorage.setItem('inventory', JSON.stringify(activityItemList))
        // this.props.updateInventorySize(this.state.activityItemList.length)
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value}, this.returnResult);
    }

    removePlaceFromInventory(index) {
        console.log(index)
        let activityItemList = this.state.activityItemList;
        activityItemList = activityItemList.splice(index,1);
        globalState.setGlobalState(activityItemList)
    }

    InventoryItem(item, index)
    {
        return <div key={index} className="col-xs-12 margin-bottom5 bg-info">
            {item.Title} <span className="pull-right clickable" onClick={this.removePlaceFromInventory.bind(this, index)}>X</span>
        </div>
    }


    render() {
        return (
            <div className="inventory">
                {this.state.activityItemList.map((item, index)=> {
                    return this.InventoryItem(item, index)
                })}
            </div>
        )
    }
}
