import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import "./style.css"

export default class Cont extends Component{
    render(){
        return(
            <div className="columns">
                <Sidebar/>
                <div style={{marginTop: 50, marginLeft: 50}}>
                    <h1 style={{marginLeft: 20}}><strong>Conteúdos - Registro</strong></h1>
                    <hr style={{width: 900}}></hr>
                    <div className="columns">
                        <input id="input-titulo" className="input" type="text" placeholder="Titulo"/>
                    </div>
                    <div className="columns">
                        <input id="input-titulo" style={{marginTop: 20}} className="input" type="text" placeholder="Descrição"/>
                    </div>
                    
                    <div className="columns">
                        <a className="button" href="/" style={{marginTop: 30, marginLeft: 10}} id="cadastrar-concurso">CADASTRAR</a>
                    </div>
                    
                </div>
            </div>
        );
    }
}