import express from "express";
import path from "path";
import routes from "./routes";
import process from "process";
import cookieParser from "cookie-parser";
import lineRoute from "./routes/lineRoute";

const app = express();
const port = process.env.PORT || 8000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(lineRoute);

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(express.json());

routes(app);

app.listen(port);
