import Product from "../models/product.js";


// ADD PRODUCT
export const addProduct = async (req, res) => {
  try {

    const { name, price, description } = req.body;

    const product = await Product.create({
      name,
      price,
      description,
    });

    res.json({
      message: "Product added successfully",
      product,
    });

  } catch (error) {

    res.json({
      message: "Error adding product",
      error: error.message,
    });

  }
};


// GET PRODUCTS + SEARCH + PAGINATION
export const allProducts = async (req, res) => {

  try {
    // SEARCH
    const search = req.query.search || "";
    // PAGINATION
    const page = Number(req.query.page) || 1;
    const limit = 6;
    const products = await Product.find({
      name: {
        $regex: search,
        $options: "i",
      },

    }).skip((page - 1) * limit).limit(limit);

    res.json({
      message: "Products fetched",
      page,
      products,

    });
  }

  catch (error) {

    res.json({
      message: "Error getting products",
      error: error.message,
    });

  }

};


// DELETE PRODUCT
export const removeProduct = async (req, res) => {

  try {

    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    res.json({
      message: "Product deleted",
      product,
    });

  }

  catch (error) {

    res.json({
      message: "Error deleting product",
      error: error.message,
    });

  }

};