import React from "react";

function renderTableRows(logs) {
  return logs.map(log => {
    return (
      <tr key={log.id}>
        <td>{log.food}</td>
        <td>{log.quantity}</td>
        <td>{log.kcal}</td>
        <td>{log.protein}</td>
        <td>{log.fat}</td>
        <td>{log.carb}</td>
      </tr>
    );
  });
}

export default function LogTable(props) {
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
        <tbody>{renderTableRows(props.logs)}</tbody>
      </table>
    </div>
  );
}
