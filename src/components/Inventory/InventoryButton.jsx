import React from 'react';
import './inventoryStyle.css';
import {DropdownButton} from 'react-bootstrap'
import globalState from './../../utility/globalState';

export default class Inventory extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
            inventoryVisable:false,
            activityItemList:[]
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggleInventoryVisable= this.toggleInventoryVisable.bind(this);
        this.updateInventory = this.updateInventory.bind(this);
        this.init = this.init.bind(this);
        globalState.addEventListener(this.updateInventory);
    }
    componentWillMount()
    {
        this.init();
    }
    init() {
        let inventoryItem = localStorage.getItem('inventory')
        if(!inventoryItem){
            inventoryItem = [];
        } else{
            inventoryItem = JSON.parse(inventoryItem);
        }

        this.setState({activityItemList:inventoryItem})
    }

    updateInventory()
    {
        let place = globalState.getGlobalState('place')
        let activityItemList = this.state.activityItemList;
        let index = activityItemList.findIndex((act)=>{return act.Id==place.Id})
        if(index==-1)
        {
            activityItemList.push(place);
            this.setState({activityItemList:activityItemList})
            localStorage.setItem('inventory', JSON.stringify(activityItemList))
        }
    }
    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value}, this.returnResult);
    }

    toggleInventoryVisable()
    {
        this.setState({
            inventoryVisable:!this.state.inventoryVisable
        })
    }
    render() {
        return (
            <div className="inventory">
                <a onClick={this.toggleInventoryVisable}>{"inventory("+this.state.activityItemList.length+")"}</a>
                {
                    this.state.inventoryVisable &&
                    <div className="inventoryBag">
                        {this.state.activityItemList.map((item,index)=>{
                            return <div key={index}> {item.Title} </div>
                        })}
                    </div>
                }
            </div>
        )
    }
}
