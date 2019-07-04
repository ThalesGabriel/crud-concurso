import React, { Component } from 'react';
import "./style.css"
import Axios from 'axios';
import Navbar from '../../components/navbar';

export default class Org extends Component{
    state ={
        formData : {
            nome: ''
        }
    }

    handleChange = event => {
        const { id, value } = event.target;
        this.setState({ formData: { ...this.state.formData, [id]: value } });
    };  
    
    postOrgao = async () => {
        try{
            await Axios.post("http://localhost:4000/orgao/create", this.state.formData)
            const formData2 ={
                nome: ''
            }
            this.setState({formData: formData2})
            alert("Órgão cadastrado com sucesso.")
        }catch{
            alert("Não foi possível cadastrar o órgão")
        }
    }

    render(){
        return(
            <div >
                <Navbar/>
                <div style={{marginTop: 50, marginLeft: 50}}>
                    <h1 style={{marginLeft: 20}}><strong>Órgãos - Registro</strong></h1>
                    <hr style={{width: 700}}></hr>
                    <input id="nome" className="input" value={this.state.formData.nome} onChange={this.handleChange} type="text" placeholder="Nome"/>
                    
                    <button style={{marginTop: 50}} className="button is-primary" onClick={() => this.postOrgao()}>CADASTRAR</button>
                </div>
            </div>
        );
    }
}