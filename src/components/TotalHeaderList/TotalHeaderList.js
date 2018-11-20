import React from "react";

export default function TotalHeaderList(props) {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <h5>kCal</h5>
        </div>
        <div className="col">
          <h5>
            {props.logs.reduce((acc, curr) => {
              return acc + curr.kcal;
            }, 0).toFixed(2)}
          </h5>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <h5>Protein</h5>
        </div>
        <div className="col">
          <h5>
            {props.logs.reduce((acc, curr) => {
              return acc + curr.protein;
            }, 0).toFixed(2)}
          </h5>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <h5>Carb</h5>
        </div>
        <div className="col">
          <h5>
            {props.logs.reduce((acc, curr) => {
              return acc + curr.carb;
            }, 0).toFixed(2)}
          </h5>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <h5>Fat</h5>
        </div>
        <div className="col">
          <h5>
            {props.logs.reduce((acc, curr) => {
              return acc + curr.fat;
            }, 0).toFixed(2)}
          </h5>
        </div>
      </div>
    </div>
  );
}
