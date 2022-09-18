import mainRoute from "./mainRoute";
import mockRoute from "./mockRoute";
import todoRoute from "./todoRoute";
import lineRoute from "./lineRoute";
import userRoute from "./userRoute";

const routes = (server: any) => {
  // render
  server.use("/", mainRoute); // おそらくrenderでejsは返せない模様
  // api
  server.use(mockRoute);
  server.use("/todos", todoRoute);
  server.use(lineRoute);
  server.use(userRoute);
};

export default routes;
