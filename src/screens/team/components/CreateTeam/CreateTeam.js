import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';


export default class CreateTeam extends React.Component {
    constructor(props){
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.state = {
            name:'',
            description:'',
            nameErr:'',
            descriptionErr:''
        }
    }

    handleFormSubmit() {
        if (this.validator() === true) this.submitForm();
    };

    handleNameChange(event) {
        this.setState({name: event.target.value})
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value})
    }

    // Should be override depend on the API
    submitForm() {
        alert("Submit the form to API...")
    }

    // The validator should be override in the future
    validator() {
        let isValid = true;
        if(this.state.name.length <= 0) {
            this.setState({nameErr:"name cannot be null"});
            isValid = false;
        } else {
            this.setState({nameErr:""});
        }
        if(this.state.description.length <= 0) {
            this.setState({descriptionErr:"description cannot be null"});
            isValid = false;
        } else {
            this.setState({descriptionErr:""});
        }
        return isValid;
    }

    render() {
        return (
            <div className="createTeamContainer">
                <h2>Create New Team</h2>
                <form className="addTeamForm" >
                    <div className="form-group">
                        <label>Team Name</label>
                        <input type="text" className="form-control" placeholder="Team Name" value={this.state.name} onChange={this.handleNameChange}/>
                        <h5 className="errMsg">{this.state.nameErr}</h5>
                    </div>
                    <div className="form-group">
                        <label>Team Description</label>
                        <textarea rows="5" className="form-control textareaDescription" placeholder="Team Description" value={this.state.description} onChange={this.handleDescriptionChange}/>
                        <h5 className="errMsg">{this.state.descriptionErr}</h5>
                    </div>
                    <button type="button" className="btn btn-default" onClick={this.handleFormSubmit}>Add Team</button>
                </form>
                <ul className="nav navbar-nav links">
                    <li><Link to="/">Back to Home</Link></li>
                </ul>
            </div>
        );
    }
}