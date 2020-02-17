import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Friends from './components/Friends'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friends">Friends List</Link>
            </li>
            <li>
              <Link to="/protected">Protected</Link>
            </li>
          </ul>


        </nav>
        <Switch>
          <ProtectedRoute excat path="protected" component={ProtectedRoute} />
          <ProtectedRoute exact path="/friends" component={Friends} />
          <Route exact path="/login" component={Login} />
        </Switch>

      </header>
    </div>
  );
}

export default App;
