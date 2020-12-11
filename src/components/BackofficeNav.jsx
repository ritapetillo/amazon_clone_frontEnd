import React, { Component } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import '../styles/BackOfficeNav.css'


export default class BackofficeNav extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="backNav">
        <Navbar.Brand href="#home" className="backNav__logo">
          <img
            className="img-fluid"
            src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817"
          />
        </Navbar.Brand>
        <Nav className="mr-auto backNav__links">
          <Nav.Link href="#home">Dashboard</Nav.Link>
          <Nav.Link href="#pricing">Products</Nav.Link>
          <Nav.Link href="#pricing">Categories</Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />

            <Button variant="outline-info">Search</Button>
          </Form> */}
          <Nav.Link href="#home">Front Store</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
