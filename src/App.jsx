import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthPage from './AuthPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/nationglorycomu/" component={HomePage} />
        <Route path="/nationglorycomu/AuthPage" component={AuthPage} />
        <Route path="/nationglorycomu/ProfilePage" component={ProfilePage} />
      </Switch>
    </Router>
  );
};

export default App;

