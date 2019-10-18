import React, { Component } from "react";
import ReactModal from "react-modal";

import ReporterForm from "./new-reporter-info";


ReactModal.setAppElement("#root");

export default class BlogModal extends Component {
  constructor(props) {
    super(props);
    this.customStyles = {
        content: {
            display: "flex",
            flexDirection: "column",
            color: "red",  
            alignItems: "center",
            margin: "10px",
            top: "50%",
            left: "50%",
            right: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%",
            width: "800px", 
            
            backgroundColor: "lightgrey", 
            
        }
    }
}
    
  

  render() {
    return (
      <ReactModal
        style={this.customStyles}
        onRequestClose={() => {
          this.props.handleModalClose();
        }}
        isOpen={this.props.modalIsOpen}
      >
        <ReporterForm />
        
      </ReactModal>
    );
  }
}