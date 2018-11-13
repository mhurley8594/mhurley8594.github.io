import React from "react";
import TotalHeader from "./TotalHeader";

export default function TotalHeaderList(props) {
  return (
    <div className="row text-center">
      <div className="col">
        <TotalHeader
          label="kCal"
          count={props.logs.reduce((acc, curr) => {
            return acc + curr.kcal;
          }, 0)}
        />
      </div>
      <div className="col">
        <TotalHeader
          label="Protein"
          count={props.logs.reduce((acc, curr) => {
            return acc + curr.protein;
          }, 0)}
        />
      </div>
      <div className="col">
        <TotalHeader
          label="Fat"
          count={props.logs.reduce((acc, curr) => {
            return acc + curr.fat;
          }, 0)}
        />
      </div>
      <div className="col">
        <TotalHeader
          label="Carb"
          count={props.logs.reduce((acc, curr) => {
            return acc + curr.carb;
          }, 0)}
        />
      </div>
    </div>
  );
}
