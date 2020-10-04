import React from "react";

const TableRow = ({ item, name, quantity, handleChange }) => (
  <tr>
    <td>{item.title}</td>
    <td>€ {item.price}</td>
    <td>
      <input type="text" value={quantity} onChange={handleChange} name={name} />
    </td>
    <td>{item.unit}</td>
    <td>€ {item.price * quantity}</td>
  </tr>
);

export default TableRow;
