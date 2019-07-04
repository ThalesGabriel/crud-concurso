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
      drop: '',
      dropBool: false,
      dropdown: false,
      conteudos: [],
      conteudoSelecionados: [],
      formData: {
        name: "",
        description: "",
        price: 0,
        image: ""
      }
    };
  }

  componentDidMount = () => {
    this.getConteudos()
  }

  getConteudos = async() => {
    try{
        const conteudos = await Axios.get("http://localhost:4000/conteudo/all", this.state)
        this.setState({ conteudos: conteudos.data })
        console.log(this.state.conteudos)
    }catch(err){
        alert("Erro na inserção de conteúdo")
    }
  }

  postCargo = async (array) => {
    
  }
  
  dropdown = () => {
    this.setState({ dropBool: !this.state.dropBool })
    if(this.state.dropBool == true){
      this.setState({drop: 'is-active'})
    }else{
      this.setState({drop: '' })
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ formData: { ...this.state.formData, [name]: value } });
  };

  handleClose = shouldRefresh => {
    this.props.closeModalHandler(shouldRefresh);
  };

  coletaDados = () =>{
    var ids = document.getElementsByClassName('Editar');
    console.log(document.getElementsByClassName('Editar'))
    this.coletaIDs(ids);         
 }  
         
  coletaIDs = async (dados) => {
      var array_dados = dados; 
      var newArray = [];
      for(var x = 0; x <= array_dados.length; x++){     
          if(typeof array_dados[x] == 'object'){
            if(array_dados[x].checked){
                newArray.push(array_dados[x].id)          
            }          
          }
      }
    if(newArray.length <= 0){
      alert("Selecione um pelo menos 1 item!");     
    }else{
      this.props.saveCargo(newArray)
      this.handleClose()
    }  
  }

  render() {
    const { conteudos } = this.state
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content hax-text-centered" style={{background: '#fff', width: 400, height: 600}}>
            <h1 style={{marginLeft: 20, marginTop: 20}}><strong>Cargo - Registro</strong></h1>
            <hr style={{width: 900, marginTop: -1}}></hr>
            <input  style={{width: 300, marginLeft: 50}} className="input" type="text" placeholder="Nome do cargo" />
            <div className={`dropdown ${this.state.drop}`}style={{marginLeft: 50, marginTop: 20 }} >
            <div className="dropdown-trigger">
              <button className="button" style={{width: 230}} aria-haspopup="true" aria-controls="dropdown-menu"  onClick={()=> this.dropdown()}>
                <span>Conteúdos</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {conteudos[0] ? 
                  conteudos.map((value, index) => (
                    <label className="checkbox"style={{marginLeft: 5}}>
                      <input className="Editar" type="checkbox" id={value.id_conteudo} value={value.titulo}></input>
                        {value.titulo}
                      <br></br>
                    </label>
                    ))
                    :
                    null}
              </div>
            </div>
            <button className="button is-success" style={{width:'100%'}} onClick={() => this.coletaDados()}>Salvar</button>
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