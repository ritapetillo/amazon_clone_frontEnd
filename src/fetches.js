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

//get all categories
export const getAllCategories = async () => {
  try {
    const res = await fetch("http://localhost:3001/categories");
    if (res.ok) {
        const categories = await res.json();
        console.log(categories)
      return categories;
    } else {
      console.log("there was a problem fetching categories");
    }
  } catch (err) {
    console.log("there was a provlem fetching categories from catch side");
  }
};
