import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import "./EstimateTable.scss";

const EstimateTable = ({ list }) => {
  return (
    <table>
      <TableHeader />
      <tbody>
        {list.map((item, index) => (
          <TableRow key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default EstimateTable;
