import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Films from './Films';
import Jedis from './Jedis';
import Cats from './Cats';
import NotFound from './NotFound';

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/jedis" component={Jedis} />
        <Route exact path="/cats" component={Cats} />
        <Route path="*" component={NotFound} />
    </Switch>
)