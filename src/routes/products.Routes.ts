import { Router } from "express";
import Controller from "../controller/productsController";


const routes = Router()

routes
.post("/products", Controller.create)
.get("/products", Controller.getAll)
.get("/products/:id", Controller.getById)
.put("/products/:id", Controller.update)
.delete("/products/:id", Controller.delete)

export default routes