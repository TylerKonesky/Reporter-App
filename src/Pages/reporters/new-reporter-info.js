import React, { Component } from "react";
import axios from "axios";

import "./new-reporter-info.css"


export default class ReporterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

//   buildForm() {
//     let formData = new FormData();

//     formData.append("portfolio_blog[name]", this.state.title);
//     formData.append("portfolio_blog[description]", this.state.blog_status);

//     return formData;
//   }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="reporter-form-wrapper">
        <div className="two-column">
          <input
            type="text"
            onChange={this.handleChange}
            name="name"
            placeholder="Reporter Name"
            value={this.state.name}
          />

          <input
            type="text"
            onChange={this.handleChange}
            name="description"
            placeholder="Reporter Description"
            value={this.state.description}
          />
        </div>

        <button className="btn">Save</button>
      </form>
    );
  }
}