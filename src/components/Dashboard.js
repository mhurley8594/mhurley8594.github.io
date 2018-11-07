import React, { Component } from 'react';
import TotalHeaderList from './TotalHeaderList';
import LogTable from './LogTable';

class App extends Component {
  render() {
    // Get the current date.
    const today = new Date();
    const currentDate = today.toISOString().substr(0, 10);

    return (
      <div className="container">
        <h3 className="text-center">
          Dashboard
        </h3>
        <div className="form-group">
          <label htmlFor="datepicker">
            Date:
          </label>
          <input
            type="date"
            id="datepicker"
            className="form-control"
            defaultValue={currentDate}
          />
        </div>
        <TotalHeaderList />
        <LogTable />
      </div>
    );
  }
}

export default App;
