import main from "./main";
import mock from "./mock";
import todos from "./todos";
import line from "./line";

const routes = (server: any) => {
  const API_ROUTE = "/api";

  // render
  server.use("/", main); // おそらくrenderでejsは返せない模様
  // api
  server.use(mock);
  server.use("/todos", todos);
  server.use(line);
};

export default routes;
