import React, {Component} from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios';

export default class Registro extends Component{
    state ={
        formData: {
            nome: ''
        }
    }

    handleChange = event => {
        const { id, value } = event.target;
        this.setState({ formData: { ...this.state.formData, [id]: value } });
    };

    registrar = async () => {
        try{
            const candidato = await Axios.post('http://localhost:4000/candidato/create', this.state.formData)
            alert(candidato.data.alert)
        }catch(err){
            alert(err.data.alert)
        }
    }

    validar = () => {
        if(this.state.formData.nome !== ''){
            this.registrar()
        }else{
            alert("Preencha o campo nome de usuário.")
        }
    }

    render(){
        return(
            <div className="is-text-centered" style={{paddingTop: 60, paddingBottom: 62, paddingLeft: 425, paddingRight: 400}}>
                <div className="card" style={{width: 500}}>
                    <div className="card-content has-text-centered">
                        <div className="tabs">
                            <ul>
                                <li ><Link to="/" className="has-text-primary">Login</Link></li>
                                <li>Registre-se</li>
                            </ul>
                        </div>
                        <p style={{paddingBottom: 40}}>
                            <strong className="has-text-primary" style={{fontSize: 30}}>Registro</strong> 
                        </p>
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                            <input className="input" value={this.state.formData.nome} id="nome" onChange={this.handleChange} style={{width: 453}} type="text" placeholder="Nome do candidato"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field" style={{paddingTop: 30}} >
                            <p className="control has-text-centered">
                                <button className="button is-primary" onClick={() => this.validar()}>Registrar</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}