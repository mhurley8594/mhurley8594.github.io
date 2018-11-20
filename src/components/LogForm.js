// React
import React, { Component } from "react";
import TotalHeaderList from "./TotalHeaderList";
import { Link } from "react-router-dom";
import Autocomplete from 'react-autocomplete';
// Redux
import { connect } from "react-redux";
import { addLog } from "../actions/actionCreators";
// USDA API key
import { USDA_API_KEY } from '../secret/keys';

class LogForm extends Component {
  constructor(props) {
    super(props);

    // Get the current date.
    const today = new Date();
    const currentDate = today.toISOString().substr(0, 10);

    this.state = {
      date: currentDate,
      foodName: "",
      foodMacros: {},
      autocompleteData: [],
      quantity: 100,
      kcal: 0,
      protein: 0,
      carb: 0,
      fat: 0,
    };

    // Bind `this` context to functions of the class
    this.onChange = this.onChange.bind(this);
    this.onAutocompleteChange = this.onAutocompleteChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.getItemValue = this.getItemValue.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(this);
    this.calculateTotals = this.calculateTotals.bind(this);
  }

  /**
    * Updates the state of the autocomplete data with the remote data obtained via AJAX.
    * 
    * @param {String} searchText content of the input that will filter the autocomplete data.
    * @return {Nothing} The state is updated but no value is returned
    */
  retrieveDataAsynchronously(searchText) {
    let _this = this;
    let url = `https://api.nal.usda.gov/ndb/search/?format=json&q=${encodeURI(searchText)}&max=25&offset=0&api_key=${USDA_API_KEY}`;

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (data.list !== undefined) {
          _this.setState({
            autocompleteData: data.list.item
          });
        }
      });
  }

  onChange = e => {
    let _this = this;
    let isQuantity = e.target.id === 'quantity';

    _this.setState({
      [e.target.id]: e.target.value
    }, () => {
      if (isQuantity && Object.keys(_this.state.foodMacros).length !== 0) _this.calculateTotals();
    });

  }

  onAutocompleteChange = e => {
    this.setState({
      foodName: e.target.value
    });

    // TODO Set delay here.
    this.retrieveDataAsynchronously(e.target.value);
  }

  onSubmit = e => {
    e.preventDefault();
    // Call the addLog action creator.
    this.props.addLog({
      date: this.state.date,
      food: this.state.foodName,
      quantity: this.state.quantity,
      kcal: this.state.kcal,
      protein: this.state.protein,
      carb: this.state.carb,
      fat: this.state.fat,
    });
    // Redirect.
    this.props.history.push("/");
  }

  /**
     * Callback triggered when the autocomplete input changes.
     * 
     * @param {Object} val Value returned by the getItemValue function.
     * @return {Nothing} No value is returned
     */
  onSelect(ndbno) {
    let _this = this;

    // Fetch the macronutrients of the selected food item.
    fetch(`https://api.nal.usda.gov/ndb/V2/reports?ndbno=${ndbno}&type=f&format=json&api_key=${USDA_API_KEY}`)
      .then(resp => resp.json())
      .then(data => {
        const foodMacros = data.foods[0].food.nutrients.reduce((acc, cur) => {
          if (cur.name === 'Energy' && cur.unit === 'kcal') acc.kcal = Number(cur.value);
          if (cur.name === 'Protein') acc.protein = Number(cur.value);
          if (cur.name === 'Total lipid (fat)') acc.fat = Number(cur.value);
          if (cur.name === 'Carbohydrate, by difference') acc.carb = Number(cur.value);
          return acc;
        }, {});

        _this.setState({
          foodName: data.foods[0].food.desc.name,
          foodMacros: foodMacros
        }, () => {
          _this.calculateTotals();
        });
      });
  }

  renderItem(item) {
    return (
      <div
        key={item.ndbno}
        className="list-group-item"
      >
        {item.name}
      </div>
    );
  }

  getItemValue(item) {
    return item.ndbno;
  }

  calculateTotals() {
    const conversion = this.state.quantity / 100;
    const foodMacros = this.state.foodMacros;

    this.setState({
      kcal: conversion * foodMacros.kcal,
      protein: conversion * foodMacros.protein,
      carb: conversion * foodMacros.carb,
      fat: conversion * foodMacros.fat
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">New Log</h3>
        <TotalHeaderList
          logs={[
            {
              kcal: this.state.kcal,
              protein: this.state.protein,
              carb: this.state.carb,
              fat: this.state.fat
            }
          ]}
        />
        <form onSubmit={this.onSubmit}>
          <label htmlFor="food">Food:</label>
          <Autocomplete
            id="food"
            getItemValue={this.getItemValue}
            items={this.state.autocompleteData}
            renderItem={this.renderItem}
            value={this.state.foodName}
            onChange={this.onAutocompleteChange}
            onSelect={this.onSelect}
            wrapperProps={{ className: "form-group", style: {} }}
            inputProps={{ className: "form-control", placeholder: "Search for food" }}
          />
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              className="form-control"
              value={this.state.date}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Grams:</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              className="form-control"
              defaultValue={100}
              onChange={this.onChange}
            />
          </div>
          <input
            type="hidden"
            name="kcal"
            id="kcal"
            value={this.state.kcal}
          />
          <input
            type="hidden"
            name="protein"
            id="protein"
            value={this.state.protein}
          />
          <input
            type="hidden"
            name="carb"
            id="carb"
            value={this.state.carb}
          />
          <input
            type="hidden"
            name="fat"
            id="fat"
            value={this.state.fat}
          />
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
