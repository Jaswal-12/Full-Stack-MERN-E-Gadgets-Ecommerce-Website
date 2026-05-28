import express from "express";
import { addProduct, allProducts, removeProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/add", addProduct);
router.get("/all", allProducts);
router.delete("/delete/:id", removeProduct);

export default router;