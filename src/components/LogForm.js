import React, { Component } from 'react';
import TotalHeaderList from './TotalHeaderList';
import { Link } from 'react-router-dom';

class LogForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h3>
                    Add Log
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input
                            id="date"
                            name="date"
                            type="date"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="food">Food</label>
                        <input
                            id="food"
                            name="food"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="grams">Grams</label>
                        <input
                            id="grams"
                            name="grams"
                            type="number"
                            className="form-control"
                            defaultValue={100}
                        />
                    </div>
                    <TotalHeaderList />
                    <button className="btn btn-secondary">
                        Add Log
                    </button>
                    <Link to="/" className="btn">Cancel</Link>
                </form>
            </div>
        );
    }
}

export default LogForm;
