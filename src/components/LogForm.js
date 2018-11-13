// React
import React, { Component } from "react";
import TotalHeaderList from "./TotalHeaderList";
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { addLog } from "../actions/actionCreators";

class LogForm extends Component {
  state = {
    date: new Date(),
    food: "",
    quantity: "",
    kcal: 100,
    protein: 100,
    carb: 100,
    fat: 100
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // Call the addLog action creator.
    this.props.addLog(this.state);
    // Redirect.
    this.props.history.push("/");
  };

  render() {
    // Get the current date.
    const today = new Date();
    const currentDate = today.toISOString().substr(0, 10);

    return (
      <div className="container">
        <h3 className="text-center">Add Log</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              className="form-control"
              defaultValue={currentDate}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="food">Food</label>
            <input
              type="text"
              name="food"
              id="food"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Grams</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              className="form-control"
              defaultValue={100}
              onChange={this.handleChange}
            />
          </div>
          <TotalHeaderList
            logs={[{ kcal: 100, protein: 100, carb: 100, fat: 100 }]}
          />
          <input type="hidden" name="kcal" id="kcal" />
          <input type="hidden" name="protein" id="protein" />
          <input type="hidden" name="carb" id="carb" />
          <input type="hidden" name="fat" id="fat" />
          <button className="btn btn-secondary">Add Log</button>
          <Link to="/" className="btn">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLog: log => dispatch(addLog(log))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LogForm);
