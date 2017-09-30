import React from 'react';
import './ActivityFilter.css';
import {destinationService} from '../../../../services'

export default class ActivityFilter extends React.Component {

    constructor(...args) {
        super(...args);
        this.state = {
            destinationList: null,
            categoryList: null,
            selectedDestinationIndex: 0,
            selectedCategoryIndex: 0
        };
        this.loadDestinationList = this.loadDestinationList.bind(this);
        this.loadCategoryList = this.loadCategoryList.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.returnResult = this.returnResult.bind(this);
        this.isAllDataLoaded = this.isAllDataLoaded.bind(this);
        this.init = this.init.bind(this);
        this.init();
    }

    init() {
        if (this.state.destinationList == null) {
            this.loadDestinationList();
            this.loadCategoryList();
        }
    }

    handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value}, this.returnResult);

    }

    loadDestinationList() {
        let that = this;
        destinationService.getDestinationListQuery()
            .then((res) => res.data)
            .then(function (data) {
                that.setState({
                    destinationList: data
                });
                that.isAllDataLoaded()
            })
            .catch((error)=> {
                console.log(error);
            });
    }

    loadCategoryList() {
        let that = this;
        destinationService.getCategoryListQuery()
            .then((res) => res.data)
            .then(function (data) {
                that.setState({
                    categoryList: data
                });
                that.isAllDataLoaded()
            })
            .catch((error)=> {
                console.log(error);
            });
    }

    isAllDataLoaded() {
        if (this.state.categoryList == null
            || this.state.destinationList == null) {
            return false;
        }
        this.returnResult();
        return true;
    }

    returnResult() {
        let result = {
            selectedDestination: this.state.destinationList[this.state.selectedDestinationIndex],
            selectedCategory: this.state.categoryList[this.state.selectedCategoryIndex]
        }
        this.props.onFilterChange(result);
    }

    render() {
        return (
            <div className="col-xs-12">
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="destinationFilter">destionation:</label>
                        <select className="form-control" name="selectedDestinationIndex" id="destinationFilter"
                                onChange={this.handleChange}>
                            {this.state.destinationList && this.state.destinationList.map((dest,index)=> {
                                return <option key={index} value={index}>{dest.Name}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="destinationFilter">Category:</label>
                        <select className="form-control" name="selectedCategoryIndex" id="categoryFilter"
                                onChange={this.handleChange}>
                            {this.state.categoryList && this.state.categoryList.map((category,index)=> {
                                return <option key={index} value={index}>{category.Name}</option>
                            })}
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}
