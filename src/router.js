import React from 'react';
import {
  Router,
  Route,
  Redirect,
  Switch,
} from 'dva/router';
import dynamic from 'dva/dynamic';

export default ({ history, app }) => {
  const IndexPage = dynamic({
    app: app,
    models: () => [
      import('./models/example'),
    ],
    component: () => import('./routes/IndexPage'),
  });
  return (
    <Router history={history}>
      <Switch>
        <Route path="/index" exact component={IndexPage}></Route>
        <Redirect to="/index" />
      </Switch>
    </Router>
  );
};