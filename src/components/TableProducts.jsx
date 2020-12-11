import React from "react";
import TableCellProduct from "./TableCellProduct";
import {Table} from 'react-bootstrap'


function TableProducts({products}) {
        return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
          <th>Updated at</th>
          <th>Created at</th>
        </tr>
      </thead>
          <tbody>
        {products && products.map((product, index) => <TableCellProduct product={product} index={index + 1}/>)}
       
      </tbody>
    </Table>
  );
}

export default TableProducts;
