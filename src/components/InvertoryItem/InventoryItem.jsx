import React from 'react';
import { DragSource } from 'react-dnd';
import {Inventory} from '../../constants'
import './inventoryItemStyle.css';
import {DropdownButton} from 'react-bootstrap'


const itemSource = {
    beginDrag(props, monitor, component) {
        // Return the data describing the dragged item
        const item = { id: props.id };
        return item;
    },
};
function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDragSource: connect.dragSource(),
        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging()
    };
}

 class InventoryItem extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
            activityItemList: []
        };
    }

    removePlaceFromInventory(key)
    {
        this.props.onInventoryItemClick(key)

    }
    render() {
        // These props are injected by React DnD,
        // as defined by your `collect` function above:
        const { isDragging, connectDragSource } = this.props;

        return (
            <div className="col-xs-12 margin-bottom5 bg-info">
                {this.props.title} <span className="pull-right clickable" onClick={this.removePlaceFromInventory.bind(this, this.props.index)}>X</span>
            </div>
        )
    }
}
// InventoryItem = DragSource(Inventory.ITEM,itemSource,collect)(InventoryItem)
export default InventoryItem;
