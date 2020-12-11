import React, { Component } from 'react'
import { getAllProducts } from "../fetches";
import TableProducts from './TableProducts';
import '../styles/BackOffice.css'

export default class BackOffice extends Component {
     state = {
    products: [],
  };
componentDidMount = async () => {
        await this.setProducts()
    }
    setProducts = async () => {
        try {
            let products = await getAllProducts();
            this.setState({ products });
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        const {products} = this.state
        return (
            <div className="mt-4 backOffice">
                <h2>Admin Dashboard</h2>
                <h4 className="mb-3">Products</h4>
                <TableProducts products={products}/>
            </div>
        )
    }
}
