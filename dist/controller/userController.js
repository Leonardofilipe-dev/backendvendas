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
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const saltRounds = 10;
                let passwordHash = bcrypt_1.default.hashSync(password, saltRounds);
                const user = new User_1.default({
                    name,
                    email,
                    password: passwordHash,
                });
                yield user.save();
                res.status(201).json(user);
            }
            catch (err) {
                console.error(err);
                res.status(500).send(err);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.default.find();
                res.json(users);
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
                const userId = req.params.id;
                const user = yield User_1.default.findById(userId);
                if (!user) {
                    return res.status(404).send('User not found!');
                }
                res.json(user);
            }
            catch (err) {
                console.error(err);
                res.status(500).send(err);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                const { name, email, password } = req.body;
                const updatedUser = yield User_1.default.findByIdAndUpdate(userId, { name, email, password }, { new: true });
                if (!updatedUser) {
                    return res.status(404).send('User not found!');
                }
                res.json(updatedUser);
            }
            catch (err) {
                console.error(err);
                res.status(500).send(err);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.id;
                const deletedUser = yield User_1.default.findByIdAndDelete(userId);
                if (!deletedUser) {
                    return res.status(404).send('User not found!');
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
exports.default = new UserController();
