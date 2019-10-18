import React, { Component } from "react";
import axios from "axios";

import "./new-reporter-info.css"
import { thisExpression } from "@babel/types";


export default class ReporterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FName: "",
      LName: "",
      Description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    axios.post('https://desolate-bastion-18101.herokuapp.com/journalist', {FName:this.state.FName, LName: this.state.LName, Description: this.state.Description}).then(response => {
      window.location.reload();

    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="reporter-form-wrapper">
        <div className="two-column">
          <input
            type="text"
            onChange={this.handleChange}
            name="FName"
            placeholder="First Name"
            value={this.state.name}
          />
          <input
            type="text"
            onChange={this.handleChange}
            name="LName"
            placeholder="Last Name"
            value={this.state.name}
          />

          <input
            type="text"
            onChange={this.handleChange}
            name="Description"
            placeholder="Reporter Description"
            value={this.state.description}
          />
        </div>

        <button className="btn" >Save</button>
      </form>
    );
  }
}