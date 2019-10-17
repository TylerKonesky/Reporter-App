import React, { Component } from "react";
import ReactModal from "react-modal";


ReactModal.setAppElement("#root");

export default class BlogModal extends Component {
  constructor(props) {
    super(props);
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
        
      </ReactModal>
    );
  }
}