import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const state = {
    dropConc: false,
    dropCand: false,
    dropCont: false,
    dropOrg: false
}

function dropdownConc () {
    state.dropConc = !state.dropConc
}

function dropdownCand () {
    state.dropCand = !state.dropCand
}

function dropdownCont () {
    state.dropCont = !state.dropCont
}

function dropdownOrg () {
    state.dropOrg = !state.dropOrg
}


const Sidebar = () => (
    
    <aside className="menu" style={{padding: 30, paddingTop: 30, fontSize: 20}}>
        <ul class="menu-list">
            <li>
            <p className="menu-label"><Link id="label-menu" onClick={() => dropdownConc()}>Concursos</Link></p>
            {state.dropConc? 
                <ul>
                    <li><Link id="label-menu" to="/concursos">Cadastrar</Link></li>
                    <li><Link id="label-menu" to="exams">Editar</Link></li>
                </ul>
            :
            null
            }
            </li>
        </ul>
        <ul class="menu-list">
            <li>
            <p className="menu-label"><Link id="label-menu" onClick={() => dropdownCand()}>Candidatos</Link></p>
            {state.dropCand? 
                <ul>
                    <li><Link id="label-menu" to="/candidatos">Cadastrar</Link></li>
                    <li><Link id="label-menu" to="/candidatos/lis">Editar</Link></li>
                </ul>
            :
            null
            }
            </li>
        </ul>
        <ul class="menu-list">
            <li>
            <p className="menu-label"><Link id="label-menu" onClick={() => dropdownCont()}>Conteúdos</Link></p>
            {state.dropCont? 
                <ul>
                    <li><Link id="label-menu" to="conteudos">Cadastrar</Link></li>
                    <li><Link id="label-menu" to="conteudoslist">Editar</Link></li>
                </ul>
            :
            null
            }
            </li>
        </ul>
        <ul class="menu-list">
            <li>
            <p className="menu-label"><Link id="label-menu" onClick={() => dropdownOrg()}>Órgãos</Link></p>
            {state.dropOrg? 
                <ul>
                    <li><Link id="label-menu" to="orgaos">Cadastrar</Link></li>
                    <li><Link id="label-menu" to="orgaoslist">Editar</Link></li>
                </ul>
            :
            null
            }
            </li>
        </ul>    
    </aside>
);

export default Sidebar;
