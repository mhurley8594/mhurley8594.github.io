import React from "react";

function renderTableRows(logs) {
  return logs.map(log => {
    return (
      <tr key={log.id}>
        <td style={{ wordBreak: 'break-all' }}>{log.food}</td>
        <td>{log.quantity}</td>
        <td>{log.kcal.toFixed(2)}</td>
        <td>{log.protein.toFixed(2)}</td>
        <td>{log.fat.toFixed(2)}</td>
        <td>{log.carb.toFixed(2)}</td>
      </tr>
    );
  });
}

export default function LogTable(props) {
  return (
    <div className="row">
      <div className="col">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Food</th>
              <th>Grams</th>
              <th>kCal</th>
              <th>Protein</th>
              <th>Fat</th>
              <th>Carb</th>
            </tr>
          </thead>
          <tbody>{renderTableRows(props.logs)}</tbody>
        </table>
      </div>
    </div>
  );
}
