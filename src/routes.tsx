import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

import Error from './Pages/Error';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Recover from './Pages/Recover';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* Rotas */}

                <Route path="/" exact component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/recover" component={Recover} />
                <Route path="/error" component={Error} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;