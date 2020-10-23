import React from "react";
import Input from "../../../Input";

const TableRow = ({ item, name, quantity, sum, handleChange }) => (
  <tr>
    <td>{item.title}</td>
    <td>€ {item.price}</td>
    <td>
      <Input
        type="number"
        value={quantity}
        onChange={handleChange}
        name={name}
        placeholder="Kiekis"
      />
    </td>
    <td>{item.unit}</td>
    <td>€ {+sum.toFixed(2)}</td>
  </tr>
);

export default TableRow;
