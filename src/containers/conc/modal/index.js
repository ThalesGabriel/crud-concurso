import React, { Component } from "react";

class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      shouldRefresh: false,
      isEdit: false,
      formData: {
        name: "",
        description: "",
        price: 0,
        image: ""
      }
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ formData: { ...this.state.formData, [name]: value } });
  };

  handleClose = shouldRefresh => {
    this.props.closeModalHandler(shouldRefresh);
  };

render() {
    return (
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    );
  }
}
  
export default FormModal;