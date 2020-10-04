import React from "react";

const TableRow = ({ item }) => (
  <tr>
    <td>{item.title}</td>
    <td>{item.price}</td>
    <td>1</td>
    <td>{item.unit}</td>
    <td>{item.price * 1}</td>
  </tr>
);

export default TableRow;
