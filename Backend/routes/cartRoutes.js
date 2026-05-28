import express from "express";

import {

addToCart,

removeCart,

allCartItems,

}

from
"../controllers/cartController.js";

const router =
express.Router();

router.post(
"/add",
addToCart
);

router.delete(
"/remove/:id",
removeCart
);

router.get(
"/",
allCartItems
);

export default router;