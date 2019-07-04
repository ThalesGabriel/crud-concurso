import React, {Component} from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios';
export default class Login extends Component{
    state = {
        formData:{
            nome: ''
        }
    }

    componentDidMount = () => {}

    handleChange = event => {
        const { id, value } = event.target;
        this.setState({ formData: { ...this.state.formData, [id]: value } });
    };

    getCandidato = async() => {
        const nome = this.state.formData.nome.trim()
        try{
            const candidato = await Axios.get(`http://localhost:4000/candidato/name/${nome}`, this.state)
            this.setState({ candidatos: candidato.data })
            window.location.href = "http://localhost:3000/home"
            console.log(this.state.candidatos)
        }catch(err){
            alert(err)
        }
    }
    
    autenticar = () => {
        if(this.state.formData.nome === ''){
            alert("Você será redirecionado para área de gerenciamento.")
            window.location.href = "http://localhost:3000/gerencia"
        }else{
            this.getCandidato()
        }
    }

    render(){
        return(
            <div className="is-text-centered" style={{paddingTop: 60, paddingBottom: 62, paddingLeft: 425, paddingRight: 400}}>
                <div className="card" style={{width: 500}}>
                    <div className="card-content has-text-centered">
                        <div class="tabs">
                            <ul>
                                <li style={{marginLeft: 10}}>Login</li>
                                <li><Link to="/register" className="has-text-primary">Registre-se</Link></li>
                            </ul>
                        </div>
                        <p style={{paddingBottom: 40}}>
                            <strong className="has-text-primary" style={{fontSize: 30}}>Login</strong> 
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
                            <button className="button is-primary" onClick={() => this.autenticar()}>Login</button>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}