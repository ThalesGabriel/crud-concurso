import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";


class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      shouldRefresh: false,
      isEdit: false,
      dropdown: false,
      formData: {
        titulo: '',
        descricao: '',
      }
    };
  }

  componentDidMount = async () => {
        const id= this.props.id
        const conteudo = await Axios.get(`http://localhost:4000/conteudo/all/${id}`)
        this.setState({formData: conteudo.data})
        console.log(this.state.formData)
  }

  salvar = async () => {
      const id = this.props.id
      try{
            await Axios.put(`http://localhost:4000/conteudo/update/${id}`, this.state.formData)
            this.handleClose()
            alert("Conteúdo alterado com sucesso.")
      }catch(err){
            alert("Houve um problema na atualização do registro de conteúdo")
      }
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ formData: { ...this.state.formData, [id]: value } });
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
            <label style={{marginLeft: 20}}>Nome do conteúdo</label>
            <input style={{width: 300, marginLeft: 50, marginTop: 5, marginBottom: 20}} id="titulo" value={this.state.formData.titulo} onChange={this.handleChange} className="input" type="text" placeholder="Titulo"/>        
            <label style={{marginLeft: 20, marginTop: 50}}>Descrição do conteúdo</label>
            <input  style={{width: 300, marginLeft: 50, marginTop: 5}} id="descricao" value={this.state.formData.descricao} onChange={this.handleChange} className="input" type="text" placeholder="Descrição"/>          
            <button className="button is-success" style={{marginLeft: 170, marginTop: 40}} onClick={() => this.salvar()}>Salvar</button>
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