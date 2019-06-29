import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './containers/login';
import Register from './containers/register';
import Main from './containers/main';
import Exams from './containers/conc';
import Cand from './containers/cand';
import Cont from './containers/cont';
import Org from './containers/org';
import ContList from './containers/contList';
import OrgList from './containers/orgList';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/concursos" component={Exams} />
            <Route exact path="/candidatos" component={Cand} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/conteudos" component={Cont} />
            <Route exact path="/orgaos" component={Org} />
            <Route exact path="/conteudoslist" component={ContList} />
            <Route exact path="/orgaoslist" component={OrgList} />

        </Switch>
    </BrowserRouter>
)

export default Router;