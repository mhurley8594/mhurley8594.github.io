import React, { Component } from 'react';
import TotalHeader from './TotalHeader';

class TotalHeaderList extends Component {
    render() {
        return (
            <div className="row text-center">
                <div className="col">
                    <TotalHeader label="kCal" count={120} />
                </div>
                <div className="col">
                    <TotalHeader label="Protein" count={15} />
                </div>
                <div className="col">
                    <TotalHeader label="Fat" count={4} />
                </div>
                <div className="col">
                    <TotalHeader label="Carb" count={7} />
                </div>
            </div>
        );
    }
}

export default TotalHeaderList;
