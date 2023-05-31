"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const db_1 = __importDefault(require("./DataBase/db"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
db_1.default.on("error", console.log.bind(console, "Erro ao conectar ao Mongo"));
db_1.default.once("open", () => {
    console.log("Conectado com sucesso!");
});
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/", index_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
