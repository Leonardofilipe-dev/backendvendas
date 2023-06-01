"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const authController_1 = __importDefault(require("../controller/authController"));
const userValidate_1 = __importDefault(require("../validate/userValidate"));
const login_1 = __importDefault(require("../validate/auth/login"));
const routes = (0, express_1.Router)();
routes
    .post("/user", userValidate_1.default, userController_1.default.create)
    .post("/login", login_1.default, authController_1.default.login)
    .get("/user", userController_1.default.getAll)
    .get("/user/:id", userController_1.default.getById)
    .put("/user/:id", userController_1.default.update)
    .delete("/user/:id", userController_1.default.delete);
exports.default = routes;
