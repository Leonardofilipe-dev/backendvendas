import { Router } from "express";
import Controller from "../controller/userController";


const routes = Router()

routes
.post("/user", Controller.create)
.get("/user", Controller.getAll)
.get("/user/:id", Controller.getById)
.put("/user/:id", Controller.update)
.delete("/user/:id", Controller.delete)

export default routes