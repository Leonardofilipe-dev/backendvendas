import { Router } from "express";
import Controller from "../controller/productsController"
import Upload from "../middlewares/upload";


const routes = Router()

routes
.post("/products", Upload.single("photo"), Controller.create)
.get("/products", Controller.getAll)
.get("/products/:id", Controller.getById)
.put("/products/:id", Controller.update)
.delete("/products/:id", Controller.delete)

export default routes