import { HashRouter, Route, Switch } from 'react-router-dom';

import Navigation from 'app1/Navigation';
import React from 'react';
import localRoutes from './routers';
import remoteRoutes from 'app1/routes';

const routes = [...localRoutes, ...remoteRoutes];

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <h1>App 1</h1>
          <Navigation />
          <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {routes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              ))}
            </Switch>
          </React.Suspense>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
