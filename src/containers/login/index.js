import React, {Component} from 'react'
import { Link } from "react-router-dom";
export default class Login extends Component{
    render(){
        return(
            <div className="is-text-centered" style={{paddingTop: 60, paddingBottom: 62, paddingLeft: 425, paddingRight: 400}}>
                <div className="card" style={{width: 500}}>
                    <div className="card-content has-text-centered">
                        <div class="tabs">
                            <ul>
                                <li class="is-active disabled"><a className="disabled" href="/">Login</a></li>
                                <li><Link to="/register">Registre-se</Link></li>
                            </ul>
                        </div>
                        <p style={{paddingBottom: 40}}>
                            <strong className="has-text-link" style={{fontSize: 30}}>Login</strong> 
                        </p>
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" style={{width: 453}} type="text" placeholder="Nome do gerente"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
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
                            <Link to="/concursos" className="button is-success" style={{width: 200}}>
                                Login
                            </Link>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}