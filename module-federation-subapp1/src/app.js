import { HashRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import localRoutes from './routers';

const routes = [...localRoutes];

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <h1>App 1</h1>
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
