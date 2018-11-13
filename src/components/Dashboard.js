// React
import React, { Component } from "react";
import TotalHeaderList from "./TotalHeaderList";
import LogTable from "./LogTable";
// Redux
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { logs } = this.props;

    // Get the current date.
    const today = new Date();
    const currentDate = today.toISOString().substr(0, 10);

    const ListArea = logs ? <LogTable logs={logs} /> : <p>Loading...</p>;
    const TotalHeaders = logs ? (
      <TotalHeaderList logs={this.props.logs} />
    ) : (
      <p>Loading...</p>
    );

    return (
      <div className="container">
        <h3 className="text-center">Dashboard</h3>
        <div className="form-group">
          <label htmlFor="datepicker">Date:</label>
          <input
            type="date"
            id="datepicker"
            className="form-control"
            defaultValue={currentDate}
          />
        </div>
        {TotalHeaders}
        {ListArea}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    logs: state.firestore.ordered.logs
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "logs" }])
)(Dashboard);
