import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import PropTypes from "prop-types";
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
            const rowSum = inputArrValues[index] * item.price;

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

EstimateTable.propTypes = {
  list: PropTypes.array.isRequired,
  inputs: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EstimateTable;
