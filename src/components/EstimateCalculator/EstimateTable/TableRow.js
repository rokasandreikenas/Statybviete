import React from "react";

const TableRow = ({ item, name, quantity, sum, handleChange }) => (
  <tr>
    <td>{item.title}</td>
    <td>€ {item.price}</td>
    <td>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        name={name}
      />
    </td>
    <td>{item.unit}</td>
    <td>€ {+sum.toFixed(2)}</td>
  </tr>
);

export default TableRow;
