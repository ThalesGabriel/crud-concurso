import React, { Component } from 'react';
import "./style.css"
import Axios from 'axios';
import FormModal from './modal'
import Navbar from '../../components/navbar';

export default class ContList extends Component{
    constructor(props){
        super(props)
        this.state = {
            conteudos: [],
            id: 0,
            showModal: false,
            formData: {
                titulo: '',
                descricao: ''
            }
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ formData: { ...this.state.formData, [name]: value } });
    };
    
    handleClose = shouldRefresh => {
        this.props.closeModalHandler(shouldRefresh);
    };

    closeModal = async () => {
        this.setState({showModal: false});
        await this.getConteudos()
    };

    edit = async id => {
        this.setState({showModal: true, id: id})
    };
    
    remove = async id => {
        try{
            await Axios.put(`http://localhost:4000/conteudo/delete/${id}`)
            this.getConteudos()
        }catch(err){
            alert("Não foi possível remover conteúdo")
        }
    };

    componentDidMount = () => {
        this.getConteudos()
    }

    handleChange = event => {
        const { id, value } = event.target;
        this.setState({ formData: { ...this.state.formData, [id]: value } });
      };

    getConteudos = async() => {
        try{
            const conteudos = await Axios.get("http://localhost:4000/conteudo/all", this.state)
            this.setState({ conteudos: conteudos.data })
            console.log(this.state.conteudos)
        }catch(err){
            alert("Erro na inserção de conteúdo")
        }
    }   

    render(){
        const { conteudos, showModal } = this.state
        return(
            <div>
                <Navbar/>
                <div style={{marginTop: 50, marginLeft: 50}}>
                    <h1 style={{marginLeft: 20}}><strong>Conteúdos - Lista</strong></h1>
                    <hr style={{width: 900}}></hr>
                    <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Opções</th>
                    </tr>
                    </thead>
                    <tbody>
                    {conteudos[0] ? 
                        conteudos.map((value, index) => (
                            <tr key={index}>
                              <td>{value.titulo}</td>
                              <td>{value.descricao}</td>
                              <td>
                                <a onClick={() => this.edit(value.id_conteudo)}><i
                                  className="fa fa-fw fa-edit cursor-link" style={{paddingRight: 2}}
                                /></a>
                                <a onClick={() => this.remove(value.id_conteudo)}><i
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
                {showModal ? (
                <FormModal
                  closeModalHandler={this.closeModal}
                  id={this.state.id}
                  editProductId={this.state.editProductId}
                />
              ) : null}
            </div>
        );
    }
}