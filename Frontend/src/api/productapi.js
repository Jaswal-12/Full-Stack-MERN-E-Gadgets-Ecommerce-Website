import axios from "axios";

const API = "http://localhost:5000/api/product";

// GET PRODUCTS
export const getProducts = async (search = "", page = 1) => {
  try {
    const { data } = await axios.get(
      `${API}/all`,

      {
        params: {
          search,

          page,
        },
      },
    );

    return data;
  } catch (error) {
    console.log(error);

    return {
      products: [],

      totalProducts: 0,

      limit: 6,
    };
  }
};
