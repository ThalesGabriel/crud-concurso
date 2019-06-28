import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Sidebar from '../../components/sidebar';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.route = props.route;
    }

    render(){
        return(
            <div className="columns">
                <Sidebar/>
                <Route exact path="http://localhost:3000/" component={this.route} />
            </div>
        );
    }
}