import React, { useState, useEffect } from "react";
import { getProductByID, getAllCategories } from "../fetches";
import { Row, Form, Button } from "react-bootstrap";

function ProductForm({ match, history }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    imageUrl: "",
    price: "",
  });
  const [productImage, setProductImage] = useState("");
  const [categories, setCategories] = useState("");
  useEffect(() => {
    setAllCategories();

    if (match.params.id === "new") {
      setProduct(product);
    } else {
      setAProductToEdit();
    }
  }, []);
  const setAllCategories = async () => {
    try {
      const cats = await getAllCategories();
      setCategories(cats);
      console.log(categories);
    } catch (err) {
      console.log(err);
    }
  };
  const setAProductToEdit = async () => {
    try {
      const product = await getProductByID(match.params.id);
      setProduct(product);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const newProduct = { ...product };
    newProduct[e.target.name] = e.target.value;
    setProduct(newProduct);
    console.log(product);
  };
  const handleSubmit = (e) => {
    console.log(product);
  };
  const handleChangeImage = (e) => {
    setProductImage(e.target.files[0]);
    const newProduct = { ...product };
    newProduct.imageUrl = e.target.files[0].name;
      setProduct(newProduct);
      console.log(product)
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
      <Row>
        <h3 className="mb-3 mt-4">
          {match.params.id === "new" ? "Add a Product" : "Edit a Product"}
        </h3>
      </Row>
      <Row>
        <Form className="" onSubmit={(e) => handleSubmit(e)}>
          <Form.Row className="mt-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              name="name"
              value={product.name}
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Description"
              as="textarea"
              rows={3}
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              placeholder="Brand"
              name="brand"
              value={product.brand}
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Label>Categories</Form.Label>
            <Form.Control as="select" onChange={handleChange} name="category">
              {categories !== "" &&
                categories.map((cat) => <option>{cat.name}</option>)}
            </Form.Control>
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              name="price"
              value={product.price}
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Group className="mt-3">
            <Form.File
              label="Product Image"
              onChange={(e) => handleChangeImage(e)}
            />
          </Form.Group>
          <Button
            variant="danger"
            type="submit"
            className="mt-3 mr-3"
            onClick={() => history.push("/admin")}
          >
            Dismiss
          </Button>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Row>
    </div>
  );
}

export default ProductForm;
