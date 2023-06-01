import { Router } from "express";
import Controller from "../controller/userController";
import authController from "../controller/authController";
import userValidate from "../validate/userValidate";
import authLogin from "../validate/auth/login"


const routes = Router()

routes
.post("/user", userValidate, Controller.create)
.post("/login", authLogin, authController.login)
.get("/user", Controller.getAll)
.get("/user/:id", Controller.getById)
.put("/user/:id", Controller.update)
.delete("/user/:id", Controller.delete)

export default routes