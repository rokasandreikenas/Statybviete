import React from "react";
import PropTypes from "prop-types";
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

TableRow.propTypes = {
  item: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sum: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TableRow;
