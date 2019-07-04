import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a class="navbar-item has-text-white"href="gerencia">Home</a>
                        <button style={{background: 'none', border: 'none'}} class="navbar-item has-text-white dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <span>Concursos</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                <div class="dropdown-content">
                                <div class="dropdown-item">
                                    <Link to="concursos">Cadastrar</Link>
                                </div>
                                </div>
                            </div>
                        </button>
                        <button style={{background: 'none', border: 'none'}} class="navbar-item has-text-white dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <span>Candidatos</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                <div class="dropdown-content">
                                <div class="dropdown-item">
                                    <Link to="candidatos">Cadastrar</Link>
                                    <hr/>
                                    <Link to="candidatoslist">Editar</Link>
                                </div>
                                </div>
                            </div>
                        </button>
                        <button style={{background: 'none', border: 'none'}} class="navbar-item has-text-white dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <span>Conteúdos</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                <div class="dropdown-content">
                                <div class="dropdown-item">
                                    <Link to="conteudos">Cadastrar</Link>
                                    <hr/>
                                    <Link to="conteudoslist">Editar</Link>
                                </div>
                                </div>
                            </div>
                        </button>
                        <button style={{background: 'none', border: 'none'}} class="navbar-item has-text-white dropdown is-hoverable">
                            <div class="dropdown-trigger">
                                <span>Órgãos</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                                <div class="dropdown-content">
                                <div class="dropdown-item">
                                    <Link to="orgaos">Cadastrar</Link>
                                    <hr/>
                                    <Link to="orgaoslist">Editar</Link>
                                </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}