import jsonServer from "json-server";
const server = jsonServer.create();

import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController";

server.post("/", createTodo);
server.get("/", getTodos);
server.patch("/:id", updateTodo);
server.delete("/:id", deleteTodo);

export default server;
