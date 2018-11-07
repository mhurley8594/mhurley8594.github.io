import React, { Component } from 'react';
import { connect } from 'react-redux';

class LogTable extends Component {
    renderTableRows() {
        return this.props.logs.map((log) => {
            return (
                <tr key={log.id}>
                    <td>{log.food}</td>
                    <td>{log.grams}</td>
                    <td>{log.kcal}</td>
                    <td>{log.protein}</td>
                    <td>{log.fat}</td>
                    <td>{log.carb}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="row">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Food</th>
                            <th>Grams</th>
                            <th>kCal</th>
                            <th>Protein</th>
                            <th>Fat</th>
                            <th>Carb</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        logs: state.logs
    }
}

export default connect(mapStateToProps)(LogTable);
