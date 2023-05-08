"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const routes = (0, express_1.Router)();
routes
    .post("/user", userController_1.default.create)
    .get("/user", userController_1.default.getAll)
    .get("/user/:id", userController_1.default.getById)
    .put("/user/:id", userController_1.default.update)
    .delete("/user/:id", userController_1.default.delete);
exports.default = routes;
