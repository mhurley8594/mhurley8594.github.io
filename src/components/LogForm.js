import React, { Component } from 'react';
import TotalHeaderList from './TotalHeaderList';
import { Link } from 'react-router-dom';

class LogForm extends Component {
    render() {
        return (
            <div>
                <TotalHeaderList />
                <form>
                    <div class="form-group">
                        <label for="date">Date</label>
                        <input id="date" name="date" type="date" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="food">Food</label>
                        <input id="food" name="food" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="grams">Grams</label>
                        <input id="grams" name="grams" type="number" class="form-control" />
                    </div>
                    <button class="btn btn-primary">
                        Add Log
                    </button>
                    <Link to="/" className="btn">Cancel</Link>
                </form>
            </div>
        );
    }
}

export default LogForm;
