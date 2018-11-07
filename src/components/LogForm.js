import React, { Component } from 'react';
import TotalHeaderList from './TotalHeaderList';
import { Link } from 'react-router-dom';

class LogForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        // Get the current date.
        const today = new Date();
        const currentDate = today.toISOString().substr(0, 10);

        return (
            <div className="container">
                <h3 className="text-center">
                    Add Log
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            className="form-control"
                            defaultValue={currentDate}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="food">Food</label>
                        <input
                            type="text"
                            name="food"
                            id="food"
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
