"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = __importDefault(require("../controller/productsController"));
const upload_1 = __importDefault(require("../middlewares/upload"));
const routes = (0, express_1.Router)();
routes
    .post("/products", upload_1.default.single("photo"), productsController_1.default.create)
    .get("/products", productsController_1.default.getAll)
    .get("/products/:id", productsController_1.default.getById)
    .put("/products/:id", productsController_1.default.update)
    .delete("/products/:id", productsController_1.default.delete);
exports.default = routes;
