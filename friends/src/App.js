import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Friends from './components/Friends'
import Add from './components/Add'
import Edit from './components/Edit'
import Logout from './components/Logout'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <Link to="/login">Login</Link>
            <Link to="/add-friends">Add Friends</Link>
            <Link to="/edit-friends">Edit Friends</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/logoout">Logout</Link>
          </ul>


        </nav>
        <Switch>
          <ProtectedRoute exact path="/add-friends" component={Add} />
          <ProtectedRoute exact path="/edit-friends" component={Edit} />
          <ProtectedRoute exact path="/logout" component={Logout} />
          <ProtectedRoute excat path="/friends" component={Friends} />
          <Route exact path="/login" component={Login} />
        </Switch>

      </header>
    </div>
  );
}

export default App;
