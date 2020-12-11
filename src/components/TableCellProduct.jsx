import React from 'react'
import moment from 'moment'

function TableCellProduct({product, index}) {
    return (
      <tr>
        <td>{index}</td>
        <td>{product.name}</td>
        <td>{product.brand}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
        <td>{moment(product.updatedAt).format("MM/DD/YY hh:mm")}</td>
        <td>{moment(product.createdAt).format("MM/DD/YY hh:mm")}</td>
      </tr>
    );
}

export default TableCellProduct
