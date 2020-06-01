import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import NoMatch from './NoMatch';
import history from '../../history';
import { PATHS } from '../constants';

import planets from '../../planets';
import people from '../../people';
import starships from '../../starships';
import app from '../../app';

const { PLANETS, PEOPLE, STARSHIPS  } = PATHS;
const { App } = app.components;

const Routes = () => (
    <Router history={history}>
        <ScrollToTop>
            <App>
                <Switch>
                    <Route
                        path={PLANETS}
                        exact
                        strict
                        component={planets.components.Planets}
                    />
                    <Route
                        path={PEOPLE}
                        exact
                        strict
                        component={people.components.People}
                    />
                    <Route
                        path={STARSHIPS}
                        exact
                        strict
                        component={starships.components.Starships}
                    />
                    <Route component={NoMatch} />
                </Switch>
            </App>
        </ScrollToTop>
    </Router>
);

export default Routes;