import React, { Component } from 'react';

class DashboardDatePicker extends Component {
  render() {
    return (
      <div class="form-group">
        <label for="datepicker">
          Date:
        </label>
        <input class="form-control" id="datepicker" type="date" />
      </div>
    );
  }
}

export default DashboardDatePicker;