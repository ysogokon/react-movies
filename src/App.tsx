import './App.css';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './route-config';
import configureValidations from './Validations';
import { useState } from 'react';
import { claim } from './auth/auth.models';
import AuthenticationContext from './auth/AuthenticationContext';

configureValidations();

function App() {
  const [claims, setClaims] = useState<claim[]>([
    { name: 'email', value: 'ysogokon@msn.com' },
    //{ name: 'role', value: 'admin' },
  ]);

  function isAdmin() {
    return (
      claims.findIndex(
        claim => claim.name === 'role' && claim.value === 'admin'
      ) > -1
    );
  }

  return (
    <BrowserRouter>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
        <Menu />
        <div className="container">
          <Switch>
            {routes.map(route => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                {route.isAdmin && !isAdmin() ? (
                  <>You are not allowed to view this page</>
                ) : (
                  <route.component />
                )}
              </Route>
            ))}
          </Switch>
        </div>
        <footer className="bd-footer py-5 mt-5 bg-light">
          <div className="container text-center">
            All rights reserved. &copy;{new Date().getFullYear().toString()}
          </div>
        </footer>
      </AuthenticationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
