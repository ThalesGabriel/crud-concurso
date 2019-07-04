import React, { Component } from 'react';
import "./style.css"
import Axios from 'axios';
import Navbar from '../../components/navbar';

export default class Cont extends Component{
    state = {
        formData: {
            titulo: '',
            descricao: ''
        }
    }

    handleChange = event => {
        const { id, value } = event.target;
        this.setState({ formData: { ...this.state.formData, [id]: value } });
    };

    cadastrarConteudo = async() => {
        try{
            await Axios.post("http://localhost:4000/conteudo/create", this.state.formData)
            const formData2 = {
                titulo: '',
                descricao: ''  
            }
            this.setState({ formData: formData2 })
            alert("Conteúdo cadastrado com sucesso. Veja-o na sessão de editar")
        }catch(err){
            alert("Erro na inserção de conteúdo")
        }
    }   

    render(){
        return(
            <div>
                <Navbar/>
                <div style={{marginTop: 50, marginLeft: 50}}>
                    <h1 style={{marginLeft: 20}}><strong>Conteúdos - Registro</strong></h1>
                    <hr style={{width: 900}}></hr>
                    <div className="columns">
                        <input id="titulo" value={this.state.formData.titulo} onChange={this.handleChange} className="input" type="text" placeholder="Titulo"/>
                    </div>
                    <div className="columns">
                        <input id="descricao"  onChange={this.handleChange} value={this.state.formData.descricao} style={{marginTop: 20}} className="input" type="text" placeholder="Descrição"/>
                    </div>
                    
                    <div className="columns">
                        <button className="button is-primary" onClick={() => this.cadastrarConteudo()} style={{marginTop: 30, marginLeft: 10}}>CADASTRAR</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}