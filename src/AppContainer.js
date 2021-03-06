import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { routes } from "./routes";
import { Page404 } from "./shared/components/Page404";

import { Header } from './shared/components/Header/Header';
import { DostavkaOplata } from "./features/info/pages/DostavkaOplata";
import { About } from "./features/info/pages/About";
import { Container } from '@material-ui/core';


export function AppContainer(props) {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Header />
      <Container>
        <Switch>
          {routes.map(route => (
            <Route key={route.key} path={route.path} exact={route.exact} component={route.component} />
          ))}
          <Route path="*" exact render={() => <Page404 />} />
        </Switch>
      </Container>
    </ConnectedRouter>
  );
}

AppContainer.propTypes = {
  history: PropTypes.object,
};
