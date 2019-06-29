import React, { Component } from 'react';
import Sidebar from '../../components/sidebar';
import "./style.css";
import Axios from 'axios';

export default class CandList extends Component{
    constructor(props){
        super(props)
        this.state = {
            candidatos: [],
            id: 0,
        }
    }
    remove = async id => {
        console.log(id)
        try{
            await Axios.put(`http://localhost:4000/candidato/delete/${id}`)
            this.getCandidatos()
        }catch(err){
            alert("Não foi possível remover candidato")
        }
    };

    componentDidMount = () => {
        this.getCandidatos()
    }

    handleChange = event => {
        const { id, value } = event.target;
        this.setState({ formData: { ...this.state.formData, [id]: value } });
      };

    getCandidatos = async() => {
        try{
            const candidato = await Axios.get("http://localhost:4000/candidato/all", this.state)
            this.setState({ candidatos: candidato.data })
            console.log(this.state.candidatos)
        }catch(err){
            alert("Erro na recuperação dos órgãos")
        }
    }   

    render(){
        const { candidatos } = this.state
        return(
            <div className="columns">
                <Sidebar/>
                <div style={{marginTop: 50, marginLeft: 50}}>
                    <h1 style={{marginLeft: 20}}><strong>Conteúdos - Lista</strong></h1>
                    <hr style={{width: 900}}></hr>
                    <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Opções</th>
                    </tr>
                    </thead>
                    <tbody>
                    {candidatos[0] ? 
                        candidatos.map((value, index) => (
                            <tr key={index}>
                              <td>{value.nome}</td>
                              <td>
                                <a onClick={() => this.remove(value.id_candidato)}><i
                                  className="fa fa-fw fa-trash cursor-link"
                                /></a>
                              </td>
                            </tr>
                          ))
                    :
                    null}
                    </tbody>  
                </table>
                </div>
            </div>
        );
    }
}