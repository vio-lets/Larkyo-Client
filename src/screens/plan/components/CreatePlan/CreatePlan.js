import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './CreatePlan.css';
import Inventory from './../../../../components/Inventory/Inventory.jsx'

function getChildContext() {
    return {
        dragDropManager: getDndContext(),
    };
}

class CreatePlan extends React.Component{


    render(){
        return(
            <div>
                <div className="col-xs-6 col-sm-5 col-md-3">
                    <Inventory>
                        {this.props.children}
                    </Inventory>
                </div>
                <div className="col-xs-6 col-sm-7 col-md-9">

                </div>
            </div>
        )
    }
}
// CreatePlan = DragDropContext(HTML5Backend)(CreatePlan);
export default CreatePlan;