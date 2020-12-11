//get all products
export const getAllProducts = async () => {
  try {
    const res = await fetch("http://localhost:3001/products");
    if (res.ok) {
      const products = await res.json();
      return products;
    } else {
      console.log("there was a problem fetching products");
    }
  } catch (err) {
    console.log("there was a provlem fetching products from catch side");
  }
};



//get all categories
export const getAllCategories = async () => {
  try {
    const res = await fetch("http://localhost:3001/categories");
    if (res.ok) {
      const categories = await res.json();
      console.log(categories);
      return categories;
    } else {
      console.log("there was a problem fetching categories");
    }
  } catch (err) {
    console.log("there was a provlem fetching categories from catch side");
  }
};

//get a product by id
export const getProductByID = async (id) => {
  try {
    const res = await fetch("http://localhost:3001/products" + id);
    if (res.ok) {
      const product = await res.json();
      return product;
    } else {
      console.log("there was a problem fetching products");
    }
  } catch (err) {
    console.log("there was a provlem fetching product from catch side");
  }
};

//post a product
export const postProduct = async (product) => {
  try {
    const res = await fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
      console.log(res)
    if (res.ok) {
        const product = await res.json();
        return product
      alert("Product correctly inserted");
      return product;
    } else {
      console.log("there was a problem posting product");
    }
  } catch (err) {
    console.log("there was a problem posting product from catch side");
  }
};

//edit a product
export const editProduct = async (id, product) => {
  try {
    const res = await fetch("http://localhost:3001/products/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (res.ok) {
      const product = await res.json();
      alert("Product correctly edited");

      return product;
    } else {
      console.log("there was a problem editing product");
    }
  } catch (err) {
    console.log("there was a problem editing product from catch side");
  }
};

//POST -> POST upload product image :id/uploadPhoto/

export const uploadProductImage = async (id, image) => {
  const formdata = new FormData();
  formdata.append("image", image);
  try {
    const res = await fetch(
      "http://localhost:3001/products/" + id + "/upload",
      {
        method: "POST",
        body: formdata,
      }
    );
    if (res.ok) {
        alert("image correctly uploaded");
        
    } else {
      console.log(res.error);
    }
  } catch {
    console.log("there was a problem uploading the image");
  }
};
