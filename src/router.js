import React from 'react';
import {
  Router,
  Route,
  Redirect,
  Switch,
} from 'dva/router';
import dynamic from 'dva/dynamic';

export default ({ history, app }) => {
  const GlobalLayout = dynamic({
    app: app,
    models: () => [
      import('./layouts/models/layouts'),
    ],
    component: () => import('./layouts'),
  });
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
        <GlobalLayout>
          <Switch>
            <Route path="/index" exact component={IndexPage}></Route>
            <Redirect to="/index" />
          </Switch>
        </GlobalLayout>
      </Switch>
    </Router>
  );
};
