import { Express } from "express";

import mainRoute from "./mainRoute";
import mockRoute from "./mockRoute";
import postRoute from "./postRoute";
import userRoute from "./userRoute";
import todoRoute from "./todoRoute";

const routes = (app: Express) => {
  // render
  app.use("/", mainRoute);
  // api
  app.use(mockRoute);
  app.use("/api/posts", postRoute);
  app.use("/api/todos", todoRoute);
  app.use(userRoute);
};

export default routes;
