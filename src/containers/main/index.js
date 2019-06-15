import React, { Component } from "react";
import { Route } from "react-router-dom";

import Footer from '../../components/footer';
import Navbar from '../../components/navbar';

class Main extends Component {
    constructor(props) {
      super(props);
      this.match = props.match;
    }
  
    render() {
      return (
        <div className="dashboard-main-wrapper">
          <Navbar />
          <Route exact path={'/'} component={Login} />
          <Footer/>
        </div>
      );
    }
  }
  
  export default Main;