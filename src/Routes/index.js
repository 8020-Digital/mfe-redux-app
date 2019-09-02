import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Route1 from '../pages/Route1'
import Route2 from '../pages/Route2'
import Route3 from '../pages/Route3'
import Route4 from '../pages/Route4'


export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/route1" component={Route1} />
            <Route exact path="/route2" component={Route2} />
            <Route exact path="/route3" component={Route3} />
            <Route exact path="/route4" component={Route4} />
        </Switch>
    )
}