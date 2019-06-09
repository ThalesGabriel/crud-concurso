import React, { Component } from 'react'

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar has-background-link" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">

                    <a role="button" className="navbar-burger burger" href="/" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu " style={{paddingRight: 10, paddingTop: 5}}>
                    <div className="navbar-start">
                    <h1 className="navbar-item">
                        Home
                    </h1>
                    </div>
                    <div className="field is-grouped">
                        <p className="control is-expanded">
                            <input className="input" type="text" placeholder="Encontre um concurso"/>
                        </p>
                        <p className="control">
                            <a className="button is-info" href="/">
                            Search
                            </a>
                        </p>
                    </div>
                </div>
            </nav>
        );
    }
}