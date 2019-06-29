import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import "./style.css"
import Axios from 'axios';

export default class Cand extends Component{
    state ={
        formData : {
            nome: ''
        }
    }

    handleChange = event => {
        const { id, value } = event.target;
        this.setState({ formData: { ...this.state.formData, [id]: value } });
    };  
    
    postCandidato = async () => {
        try{
            await Axios.post("http://localhost:4000/candidato/create", this.state.formData)
            const formData2 ={
                nome: ''
            }
            this.setState({formData: formData2})
            alert("Candidato cadastrado com sucesso.")
        }catch{
            alert("Não foi possível cadastrar o candidato")
        }
    }
    render(){
        return(
            <div className="columns">
                <Sidebar/>
                <div style={{marginTop: 50, marginLeft: 50}}>
                    <h1 style={{marginLeft: 20}}><strong>Candidatos - Registro</strong></h1>
                    <hr style={{width: 900}}></hr>
                    <input id="nome" className="input" value={this.state.formData.nome} onChange={this.handleChange} type="text" placeholder="Nome do candidato"/>
                    
                    <button style={{marginTop: 50}} className="button" id="cadastrar-concurso" onClick={() => this.postCandidato()}>CADASTRAR</button>
                </div>
            </div>
        );
    }
}