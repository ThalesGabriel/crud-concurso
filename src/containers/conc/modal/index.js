import React, { Component } from "react";
import PropTypes from "prop-types";


class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      shouldRefresh: false,
      isEdit: false,
      dropdown: false,
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
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content hax-text-centered" style={{background: '#fff', width: 400, height: 600}}>
            <h1 style={{marginLeft: 20, marginTop: 20}}><strong>Cargo - Registro</strong></h1>
            <hr style={{width: 900, marginTop: -1}}></hr>
            <input  style={{width: 300, marginLeft: 50}} className="input" type="text" placeholder="Nome do cargo"/>
            <div class="dropdown is-active"style={{marginLeft: 50, marginTop: 20 }}>
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Conteúdos</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
              <label class="checkbox"style={{marginLeft: 5}}>
                <input type="checkbox"></input>
                  Remember me
              </label>
              </div>
            </div>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={() => this.handleClose()}></button>
      </div>
    );
  }
}

FormModal.propTypes = {
  values: PropTypes.object,
  closeModalHandler: PropTypes.func
};

FormModal.defaultProps = {
  values: null
};
  
export default FormModal;