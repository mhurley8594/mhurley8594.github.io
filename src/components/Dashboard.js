import React, { Component } from 'react';
import TotalHeaderList from './TotalHeaderList';
import DashboardDatePicker from './DashboardDatePicker';
import LogTable from './LogTable';

class App extends Component {
  render() {
    return (
      <div>
        <TotalHeaderList />
        <DashboardDatePicker />
        <LogTable />
      </div>
    );
  }
}

export default App;
