import React, { Component } from 'react';
import "./style.css";
import Axios from 'axios';
import Navbar from '../../components/navbar';

export default class OrgList extends Component{
    constructor(props){
        super(props)
        this.state = {
            orgaos: [],
            id: 0,
            formData: {
                titulo: '',
                descricao: ''
            }
        }
    }
    remove = async id => {
        console.log(id)
        try{
            await Axios.delete(`http://localhost:4000/orgao/${id}/delete`)
            this.getOrgaos()
        }catch(err){
            alert("Não foi possível remover conteúdo")
        }
    };

    componentDidMount = () => {
        this.getOrgaos()
    }

    handleChange = event => {
        const { id, value } = event.target;
        this.setState({ formData: { ...this.state.formData, [id]: value } });
      };

    getOrgaos = async() => {
        try{
            const orgaos = await Axios.get("http://localhost:4000/orgao/all", this.state)
            this.setState({ orgaos: orgaos.data })
            console.log(this.state.orgaos)
        }catch(err){
            alert("Erro na recuperação dos órgãos")
        }
    }   

    render(){
        const { orgaos } = this.state
        return(
            <div>
                <Navbar/>
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
                    {orgaos[0] ? 
                        orgaos.map((value, index) => (
                            <tr key={index}>
                              <td>{value.nome}</td>
                              <td>
                                <a onClick={() => this.remove(value.id_orgao)}><i
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