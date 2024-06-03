import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AuthPage from './AuthPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/nationglorycomu/" component={HomePage} />
        <Route path="/nationglorycomu/AuthPage" component={AuthPage} />
        <Route path="/nationglorycomu/ProfilePage" component={ProfilePage} />
      </Routes>
    </Router>
  );
};

export default App;

