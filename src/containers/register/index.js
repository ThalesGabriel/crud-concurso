import React, {Component} from 'react'
import { Link } from "react-router-dom";

export default class Registro extends Component{
    render(){
        return(
            <div className="is-text-centered" style={{paddingTop: 60, paddingBottom: 62, paddingLeft: 425, paddingRight: 400}}>
                <div className="card" style={{width: 500}}>
                    <div className="card-content has-text-centered">
                        <div class="tabs">
                            <ul>
                                <li><Link to="/">Login</Link></li>
                                <li class="is-active disabled"><a href="/register">Registre-se</a></li>
                            </ul>
                        </div>
                        <p style={{paddingBottom: 40}}>
                            <strong className="has-text-link" style={{fontSize: 30}}>Registro</strong> 
                        </p>
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" style={{width: 453}} type="text" placeholder="Nome do candidato"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" style={{width: 453}} type="text" placeholder="Número do candidato"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-id-badge"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Senha"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field" style={{paddingTop: 30}} >
                            <p className="control has-text-centered">
                                <button className="button is-success" style={{width: 200}}>
                                Registrar
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}