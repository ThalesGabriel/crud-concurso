import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import "./style.css";
import FormModal from './modal'

export default class Exams extends Component{
    state = {
        showModal: false
    }

    closeModal = async () => {
        this.setState({
          showModal: false,
        });
      };

    render(){
        const { showModal } = this.state
        return(
            <div className="columns">
                <Sidebar/>
                <div style={{marginTop: 50, marginLeft: 50}}>
                    <h1 style={{marginLeft: 20}}><strong>Concursos - Registro</strong></h1>
                    <hr style={{width: 900}}></hr>
                    <input id="input-concursos" className="input" type="text" placeholder="#Nome do concurso"/>
                    <div className="columns" style={{marginTop: 20}}>
                        <p style={{paddingRight: 10, marginTop: 5, marginLeft: 90}}>Ano:</p><input className="input" id="input-orgao" type="text"/>
                    </div>
                    <div className="columns" style={{marginTop: 20, marginLeft: 120}}>
                        <div className="dropdown">
                        <div className="dropdown-trigger">
                            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>Órgão</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                            <a href="/" className="dropdown-item">
                                Assistente admnistrativo
                            </a>
                            </div>
                        </div>
                    </div>
                    </div>
                    <h2>Cargos: </h2>
                    <div className="dropdown" style={{marginTop: 20, marginLeft: 20}}>
                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                            <a href="/" className="dropdown-item">
                                Assistente admnistrativo
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <button style={{background:'transparent', border:'none'}} onClick={() => this.setState({ showModal: true })}><i className="far fa-plus-square" style={{marginTop: 20, marginLeft: 50, fontSize: 30}}></i></button>
                        <p style={{marginTop: 22, marginLeft: 20}}>Adicionar Cargo</p>
                    </div>
                    <a className="button" href="/" style={{marginTop: 50}} id="cadastrar-concurso">CADASTRAR</a>
                </div>
                {showModal ? (
                <FormModal
                  closeModalHandler={this.closeModal}
                  editProductId={this.state.editProductId}
                />
              ) : null}
            </div>
        );
    }
}