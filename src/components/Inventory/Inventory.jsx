import React from 'react';
import { DragSource } from 'react-dnd';
import './inventoryStyle.css';
import {DropdownButton} from 'react-bootstrap'
import globalState from './../../utility/globalState';
import InventoryItem from './../InvertoryItem/InventoryItem.jsx'

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
         this.props.updateInventorySize(this.state.activityItemList.length)
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

    render() {
        return (
            <div className="inventory">
                {this.state.activityItemList.map((item, index)=> {
                    return <InventoryItem key={index} index={index} title={item.Title} onInventoryItemClick={this.removePlaceFromInventory.bind(this, index)}></InventoryItem>
                })}
            </div>
        )
    }
}
