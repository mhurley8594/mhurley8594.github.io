// React
import React, { Component } from "react";
import TotalHeaderList from "./TotalHeaderList";
import LogTable from "./LogTable";
// Redux
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    // Get the current date.
    const today = new Date();
    const currentDate = today.toISOString().substr(0, 10);

    this.state = {
      date: currentDate
    };

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(e) {
    this.setState({
      date: e.target.value
    });
  }

  render() {
    const { logList } = this.props;

    let ListArea = <div />;
    let TotalHeaders = <div />;
    if (logList) {
      // Get the logs for the selected date.
      const selectedDateLogList = logList.reduce((acc, cur) => {
        if (cur.date === this.state.date) acc.push(cur);
        return acc;
      }, []);

      ListArea = <LogTable logs={selectedDateLogList} />;
      TotalHeaders = <TotalHeaderList logs={selectedDateLogList} />;
    }

    return (
      <div className="container">
        <h3 className="text-center">Day Totals</h3>
        {TotalHeaders}
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            className="form-control"
            defaultValue={this.state.date}
            onChange={this.onDateChange}
          />
        </div>
        {ListArea}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    logList: state.firestore.ordered.logs
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "logs" }])
)(Dashboard);
