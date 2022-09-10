import jsonServer from "json-server";
const server = jsonServer.create();
import { MainController } from "../controllers";

server.get("/", MainController.getAll);

export default server;
