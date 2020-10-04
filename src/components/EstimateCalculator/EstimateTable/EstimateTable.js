import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import "./EstimateTable.scss";

const EstimateTable = ({ list, inputs, handleChange }) => {
  console.log(inputs);

  return (
    <table className="estimate-table">
      <TableHeader />
      <tbody>
        {list.map((item, index) => {
          const inputArrValues = Object.values(inputs);
          const inputArrKeys = Object.keys(inputs);
          return (
            <TableRow
              key={index}
              item={item}
              name={inputArrKeys[index]}
              quantity={inputArrValues[index]}
              handleChange={handleChange}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default EstimateTable;
