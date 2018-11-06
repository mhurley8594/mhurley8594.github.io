import React, { Component } from 'react';

class LogTable extends Component {
    render() {
        return (
            <div>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Food</th>
                            <th>Grams</th>
                            <th>kCal</th>
                            <th>Protein</th>
                            <th>Fat</th>
                            <th>Carb</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>06-11-2018</td>
                            <td>String Cheese</td>
                            <td>60</td>
                            <td>120</td>
                            <td>15</td>
                            <td>4</td>
                            <td>7</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LogTable;
