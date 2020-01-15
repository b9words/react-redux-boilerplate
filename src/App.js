import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'history.js';
import User from 'containers/User';
import './styles/global.scss';

function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/terms" exact component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
