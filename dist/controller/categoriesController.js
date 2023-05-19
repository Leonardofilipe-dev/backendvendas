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
const Categories_1 = __importDefault(require("../models/Categories"));
class CategoriesController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const categories = new Categories_1.default({
                    name,
                });
                yield categories.save();
                res.status(201).json(categories);
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield Categories_1.default.find();
                res.json(categories);
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
                const categoryId = req.params.id;
                const category = yield Categories_1.default.findById(categoryId);
                if (!category) {
                    return res.status(404).send('Category not found!');
                }
                res.json(category);
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryId = req.params.id;
                const { name } = req.body;
                const updatedCategory = yield Categories_1.default.findByIdAndUpdate(categoryId, { name }, { new: true });
                if (!updatedCategory) {
                    return res.status(404).send('Category not found!');
                }
                res.json(updatedCategory);
            }
            catch (err) {
                res.status(500).send(err);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryId = req.params.id;
                const deletedCategory = yield Categories_1.default.findByIdAndDelete(categoryId);
                if (!deletedCategory) {
                    return res.status(404).send('Category not found!');
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
exports.default = new CategoriesController();
