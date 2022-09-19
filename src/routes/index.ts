import { Express } from "express";

import mainRoute from "./mainRoute";
import mockRoute from "./mockRoute";
// import postRoute from "./postRoute";
import userRoute from "./userRoute";

const routes = (app: Express) => {
  // render
  app.use("/", mainRoute);
  // api
  app.use(mockRoute);
  // app.use("/posts", postRoute);
  app.use(userRoute);
};

export default routes;
