import express from "express";
import cors from "cors";
import routes from "./routes/index";
import db from "./DataBase/db";
import dotenv from "dotenv";
dotenv.config();

db.on("error", console.log.bind(console, "Erro ao conectar ao Mongo"));
db.once("open", () => {
  console.log("Conectado com sucesso!");
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
