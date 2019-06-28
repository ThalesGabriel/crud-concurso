import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import "./style.css"

export default class Cand extends Component{
    render(){
        return(
            <div className="columns">
                <Sidebar/>
                <div style={{marginTop: 50, marginLeft: 50}}>
                    <h1 style={{marginLeft: 20}}><strong>Candidatos - Registro</strong></h1>
                    <hr style={{width: 900}}></hr>
                    <input id="input-concursos" className="input" type="text" placeholder="Nome do candidato"/>
                    
                    <a className="button" href="/" id="cadastrar-concurso">CADASTRAR</a>
                </div>
            </div>
        );
    }
}