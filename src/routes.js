import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Passaword from './pages/Passaword';
import Account from './pages/Account';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/passaword" component={Passaword} />
                <Route path="/account" component={Account} />
            </Switch>
        </BrowserRouter>
    );
}