import React, { Component } from 'react';
import TotalHeaderList from './TotalHeaderList';
import LogTable from './LogTable';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>Dashboard</h3>
        <TotalHeaderList />
        <div className="form-group">
          <label htmlFor="datepicker">
            Date:
        </label>
          <input
            className="form-control"
            id="datepicker"
            type="date"
          />
        </div>
        <LogTable />
      </div>
    );
  }
}

export default App;
