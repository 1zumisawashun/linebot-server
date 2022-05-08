import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import path from "path";
import todoRoutes from "./routes/todos";
import lineRoutes from "./routes/line";
import routes from "./routes";

const app = express();
app.use(lineRoutes);

app.use(json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
routes(app);
app.use("/todos", todoRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(4000);
