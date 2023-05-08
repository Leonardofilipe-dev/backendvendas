import express, { Router } from "express";
import categoriesRoutes from "../routes/categoriesRoutes";
import productRoutes from "../routes/products.Routes";
import userRoutes from "../routes/userRoutes";

const router = Router();

router.use(express.json());
router.use(categoriesRoutes)
router.use(productRoutes)
router.use(userRoutes)

export default router;

