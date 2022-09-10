import mainRoute from "./mainRoute";
import mockRoute from "./mockRoute";
import todoRoute from "./todoRoute";
import lineRoute from "./lineRoute";

const routes = (server: any) => {
  // render
  server.use("/", mainRoute); // おそらくrenderでejsは返せない模様
  // api
  server.use(mockRoute);
  server.use("/todos", todoRoute);
  server.use(lineRoute);
};

export default routes;
