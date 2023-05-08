import { Router } from "express";
import Controller from "../controller/categoriesController";

const routes = Router()

routes
.post("/categories", Controller.create)
.get("/categories", Controller.getAll)
.get("/categories/:id", Controller.getById)
.put("/categories/:id", Controller.update)
.delete("/categories/:id", Controller.delete)

export default routes

