import React from 'react';
import './CreatePlan.css';
import Inventory from './../../../../components/Inventory/Inventory.jsx'


export default class CreatePlan extends React.Component{
    render(){
        return(
            <div>
                <div className="col-xs-6 col-sm-5 col-md-3">
                    <Inventory></Inventory>
                </div>
                <div className="col-xs-6 col-sm-7 col-md-9">

                </div>
            </div>
        )
    }
}