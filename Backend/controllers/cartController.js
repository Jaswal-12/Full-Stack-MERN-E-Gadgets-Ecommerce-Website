import Cart from "../models/cart.js";

// ADD TO CART
export const addToCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    if (!userId || !productId) {
      return res.status(400).json({
        message: "UserId and ProductId required",
      });
    }

    const cart = await Cart.create({
      user: userId,

      items: [
        {
          product: productId,

          quantity: 1,
        },
      ],
    });

    res.status(201).json({
      success: true,

      message: "Added To Cart",

      cart,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

// REMOVE
export const removeCart = async (req, res) => {
  try {
    const { id } = req.params;

    await Cart.findByIdAndDelete(id);

    res.json({
      success: true,

      message: "Removed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET CART
export const allCartItems = async (req, res) => {
  try {
    const cart = await Cart.find()

      .populate("items.product");

    res.json({
      success: true,

      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
