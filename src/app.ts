import express from "express";
import path from "path";
import routes from "./routes";
import process from "process";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 8000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

routes(app);

app.use(express.json()); // line.middlewareとの読み込む順番を順守するためここにおいている

app.listen(port);
