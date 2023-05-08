"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriesController_1 = __importDefault(require("../controller/categoriesController"));
const routes = (0, express_1.Router)();
routes
    .post("/categories", categoriesController_1.default.create)
    .get("/categories", categoriesController_1.default.getAll)
    .get("/categories/:id", categoriesController_1.default.getById)
    .put("/categories/:id", categoriesController_1.default.update)
    .delete("/categories/:id", categoriesController_1.default.delete);
exports.default = routes;
