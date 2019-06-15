import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './containers/login'
import Register from './containers/register'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
    </BrowserRouter>
)

export default Router;