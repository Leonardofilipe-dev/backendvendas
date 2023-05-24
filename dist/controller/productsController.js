"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Products_1 = __importDefault(require("../models/Products"));
class ProductsController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, photo, price, description, category } = req.body;
            try {
                const existingProduct = yield Products_1.default.findOne({ name });
                if (existingProduct) {
                    return res.status(409).send('Product already exists!');
                }
                const categoryId = category;
                const newProduct = new Products_1.default({
                    name,
                    photo,
                    price,
                    description,
                    category: categoryId
                });
                yield newProduct.save();
                return res.status(201).json(newProduct);
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield Products_1.default.find();
                res.json(products);
            }
            catch (err) {
                console.error(err);
                res.status(500).send(err);
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = req.params.id;
                const product = yield Products_1.default.findById(productId);
                if (!product) {
                    return res.status(404).send('Product not found!');
                }
                res.json(product);
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = req.params.id;
                const { name, photo, price, description, category } = req.body;
                const updatedProduct = yield Products_1.default.findByIdAndUpdate(productId, { name, photo, price, description, category }, { new: true });
                if (!updatedProduct) {
                    return res.status(404).send('Product not found!');
                }
                res.json(updatedProduct);
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productId = req.params.id;
                const deletedProduct = yield Products_1.default.findByIdAndDelete(productId);
                if (!deletedProduct) {
                    return res.status(404).send('Product not found!');
                }
                res.sendStatus(204);
            }
            catch (err) {
                console.error(err);
                res.status(500).send(err);
            }
        });
    }
}
exports.default = new ProductsController();
