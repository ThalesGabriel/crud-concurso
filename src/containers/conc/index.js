import React, { Component } from 'react';
import "./style.css";
import Axios from 'axios';
import Navbar from '../../components/navbar'

export default class Exams extends Component{
    state = {
        showModal: false,
        cargo: [],
        conteudos: [],
        conteudosNaoRepetidos: [],
        orgaoNome: '',
        orgaoId: 0,
        idConcurso: 0,
        orgaos: '',
        drop: '',
        dropBool: false,
        conteudosSelecionados: [],
        idConteudosSelecionados: [],
        drop2: '',
        dropBool2: false,
        formDataConc:{
            nome:'',
            ano: '',
        },
        formDataCargo: {
            descricao: '',
        }
    }

    closeModal = async () => {
        this.setState({
          showModal: false,
        });
    };

    componentDidMount = () => {
        alert("Esta implementação não foi concluída")
        this.getConteudos()
        this.getOrgaos()
    }

    saveCargo = (array) => {
        console.log("array " + array)
    }

    selectValue = (id, nome) => {
        this.setState({ orgaoNome: nome, orgaoId: id })
        this.state.formDataConc.idOrgao = id
        this.dropdown()
    }

    postConcurso = async (newArray) => {
        try{
            const concurso = await Axios.post("http://localhost:4000/concurso/create", this.state.formDataConc)
            this.postCargo(concurso.data.concurso.id_concurso, newArray)
        }catch(err){
            alert(err)
        }
    }

    postCargo = async (id) => {
        alert("Esta implementação não foi concluída")
        this.state.formDataCargo.idConcurso = id
        this.setState({ idConcurso: id })
        console.log("form2:" + JSON.stringify(this.state.formDataCargo) + JSON.stringify(this.state.formDataConc))
        const formDataCargo2 = {
            descricalertao: ''
        }
        const formDataConc2 = {
            nome: '',
            ano: ''
        }
        this.setState({formDataCargo: formDataCargo2, formDataConc: formDataConc2})
        try{
            await Axios.post(`http://localhost:4000/concurso/${id}/cargo/create`, this.state.formDataCargo)
            alert("Concurso Cadastrado com sucesso.")
        }catch{
            alert("Erro na inserção de cargo.")
        }
    }


    getConteudos = async() => {
        try{
            const conteudos = await Axios.get("http://localhost:4000/conteudo/all", this.state)
            this.setState({conteudos: conteudos.data})
            console.log('conteudos' + JSON.stringify(conteudos.data))
        }catch(err){
            alert("Erro na inserção de conteúdo")
        }
      }

    getOrgaos = async() => {
        alert(JSON.stringify(this.state.conteudosNaoRepetidos))
        try{
            const orgaos = await Axios.get("http://localhost:4000/orgao/all", this.state)
            this.setState({ orgaos: orgaos.data })
            console.log(this.state.orgaos)
        }catch(err){
            alert("Erro na recuperação dos órgãos")
        }
    }
    
    coletaDados = () =>{
        var ids = document.getElementsByName("conteudo");
        console.log(document.getElementsByName("conteudo"))
        this.coletaIDs(ids);         
     }  
             
      coletaIDs = async (dados) => {
          var array_dados = dados; 
          for(var x = 0; x < array_dados.length; x++){ 
            if(array_dados[x].selected){
                this.state.conteudosSelecionados.push({id: array_dados[x].value, nome: array_dados[x].label})                      
                this.state.idConteudosSelecionados.push(array_dados[x].value)
            }
          }
        if(this.state.conteudosSelecionados.length <= 0){
          alert("Selecione um pelo menos 1 item!");     
        }else{
            console.log(this.state.conteudosSelecionados)
        }  
    }

    handleChangeConc = event => {
        const { id, value } = event.target;
        this.setState({ formDataConc: { ...this.state.formDataConc, [id]: value } });
    };

    handleChangeCargo = event => {
        const { id, value } = event.target;
        this.setState({ formDataCargo: { ...this.state.formDataCargo, [id]: value } });
    };

    render(){
        const { orgaos, conteudos} = this.state
        return(
            <div>
                <Navbar/>
                <div className="main">
                    <div className="header column">
                        <h1 style={{fontSize: 22}}>Registro de Concurso</h1>
                        <hr/>
                    </div>
                    <div className="registro-concurso column">
                        <div className="field">
                        <div className="control">
                            <input id="nome" value={this.state.formDataConc.nome} onChange={this.handleChangeConc} className="input is-medium" type="text" placeholder="Nome do concurso"/>
                        </div>
                        </div>
                        <div className="field is-grouped" style={{marginTop: 30}}>
                        <div className="field">
                            <label className="label">Ano:</label>
                            <div className="control">
                            <div className="select">
                                <select>
                                <option value={2019}>2019</option>
                                <option value={2020}>2020</option>
                                <option value={2021}>2021</option>
                                <option value={2022}>2022</option>
                                <option value={2023}>2023</option>
                                <option value={2024}>2024</option>
                                <option value={2025}>2025</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="field" style={{marginLeft: 10}}>
                            <label className="label">Órgão:</label>
                            <div className="control">
                            <div className="select">
                                <select>
                                <option>Selecione o órgão</option>
                                {orgaos[0] ? orgaos.map((value, index) => ( <option className="option">{value.nome}</option> )): "orgão"}
                                </select>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="column registro-cargos">
                        <h2 style={{marginBottom: 15}}>Cargos exigidos:</h2>
                        <div className="cadastro-cargo" style={{padding: 30, backgroundColor: '#f5f6fa'}}>
                            <div className="field">
                            <div className="control">
                                <input className="input" type="text" placeholder="Nome do cargo"/>
                            </div>
                            </div>
                            <div className="field has-addons">
                            <div className="control is-expanded">
                                <div className="select is-fullwidth">
                                <select name="conteudos">
                                    <option value="">Selecione um conteúdo</option>
                                    {conteudos[0] ? conteudos.map((value, index) => ( <option name="conteudo" value={value.id_conteudo}>{value.titulo}</option> )): "orgão"}
                                </select>
                                </div>
                            </div>
                            <div className="control">
                                <button type="submit" className="button is-primary" onClick={() => this.coletaDados()}>Adicionar</button>
                            </div>
                            </div>
                            <div className="conteudos-info" >
                            <h3>Conteúdos exigidos:</h3>
                            <div className="conteudos-list" style={{marginLeft: 20}}>
                                <ul>
                                {this.state.conteudos.length > 0 ? this.state.conteudos.map((value, index) => ( <li>{value.titulo}</li> )): "conteudo"}
                                <li>Conteudo 1</li>
                                <li>Conteudo 2...</li>
                                </ul>
                            </div>
                            </div>
                            <div className="field">
                            <p className="control">
                                <button className="button is-primary">
                                Cadastrar Cargo
                                </button>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}