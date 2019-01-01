import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cats from './Cats';
import NotFound from './NotFound';

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cats" component={Cats} />
        <Route path="*" component={NotFound} />
    </Switch>
)