import React from "react";

export default function LogList(props) {
  return (
    <table className="table table-striped table-bordered">
      <tbody>
        {props.logs.map((log, index) => {
          return (
            <React.Fragment key={log.id}>
              <tr>
                <td rowSpan={2}>
                  {index + 1}
                </td>
                <td colSpan={4}>
                  {log.food}
                </td>
              </tr>
              <tr>
                <td>kCal: {log.kcal.toFixed(2)}</td>
                <td>Protein: {log.protein.toFixed(2)}</td>
                <td>Carb: {log.carb.toFixed(2)}</td>
                <td>Fat: {log.fat.toFixed(2)}</td>
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
    // <div className="container">
    //   <div className="row">
    //     <div className="col">
    //       <label>Log List:</label>
    //     </div>
    //   </div>
    //   {props.logs.map(log => {
    //     return (
    //       <div className="row" key={log.id}>
    //         <div className="col">
    //           {log.food}
    //           <TotalHeaderList logs={[log]} />
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
}
