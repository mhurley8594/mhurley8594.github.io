import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LogForm from './components/LogForm';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact={true} path="/" component={Dashboard} />
            <Route exact={true} path="/add" component={LogForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
