import React from 'react';
import './DestinationFilter.css';
import {destinationService} from '../../../../services'
import {Dest} from './../../../../models/Destination'

export default class DestinationFilter extends React.Component{

    constructor (...args) {
        super(...args);
        this.state = {
            destinationList: null,
            selectedDestination:null
        };
        this.loadDestinationList = this.loadDestinationList.bind(this);
        this.init = this.init.bind(this);
        this.init();
    }
    init()
    {   console.log("init")
        if(this.state.destinationList == null){
            this.loadDestinationList();
        }
    }
    loadDestinationList() {
        let that = this;
        console.log("loadDestinationList")
        destinationService.getDestinationListQuery()
            .then((res) => res.data)
            .then(function (data) {
                console.log(123);
                console.log(data);

                that.setState({destinationList:data});

            })
            .catch((error)=> {
                console.log(error);
            });
    }


    render(){
        return(
            <div>
                destionation:
                <select name="destination" id="">
                    {this.state.destinationList && this.state.destinationList.map((dest)=>{
                        return <option key={dest.Id} value={dest.Id}>{dest.Name}</option>
                    })}
                </select>

            </div>
        )
    }
}