import React, {Component} from 'react'

export default class Login extends Component{
    render(){
        return(
            <div className="is-text-centered" style={{paddingTop: 60, paddingBottom: 62, paddingLeft: 425, paddingRight: 400}}>
                <div className="card" style={{width: 500}}>
                    <div className="card-content has-text-centered">
                        <p style={{paddingBottom: 40}}>
                            <strong className="has-text-black" style={{fontSize: 30}}>Login</strong> 
                        </p>
                        <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" style={{width: 453}} type="email" placeholder="Email"/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                        </div>
                        <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password"/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                            </span>
                        </p>
                        </div>
                        <div className="field" style={{paddingTop: 30}} >
                        <p className="control has-text-centered">
                            <button className="button is-success" style={{width: 200}}>
                            Login
                            </button>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}