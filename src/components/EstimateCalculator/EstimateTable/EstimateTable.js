import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import "./EstimateTable.scss";

const EstimateTable = ({ list, inputs, handleChange }) => {
  return (
    <div className="table-wrap">
      <table className="estimate-table">
        <TableHeader />
        <tbody>
          {list.map((item, index) => {
            const inputArrValues = Object.values(inputs);
            const inputArrKeys = Object.keys(inputs);
            let rowSum = inputArrValues[index] * item.price;
            return (
              <TableRow
                key={index}
                item={item}
                name={inputArrKeys[index]}
                quantity={inputArrValues[index]}
                handleChange={handleChange}
                sum={rowSum}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EstimateTable;
