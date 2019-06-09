import React, { Component } from 'react'

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar is-link" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <a class="navbar-item has-text-white"href="/">Home</a>
                    </div>
                    <div className="field is-grouped" style={{paddingRight: 10, paddingTop: 8}}>
                        <p className="control is-expanded">
                            <input className="input" type="text" placeholder="Encontre um concurso"/>
                        </p>
                        <p className="control">
                            <a className="button is-info" href="/">
                            Search
                            </a>
                        </p>
                        <button className="button is-success" style={{width: 100}}>
                            Registre-se
                        </button>
                    </div>
                </div>
            </nav>
        );
    }
}