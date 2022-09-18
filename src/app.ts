import express from "express";
import { json } from "body-parser";
import path from "path";
import routes from "./routes";
import process from "process";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 8000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(json());
app.use(cookieParser());
app.use(express.json());

routes(app);

app.listen(port);
