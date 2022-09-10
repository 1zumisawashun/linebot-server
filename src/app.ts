import express from "express";
import { json } from "body-parser";
import path from "path";
import routes from "./routes";
import jsonServer from "json-server";
import process from "process";
import cookieParser from "cookie-parser";

const server = jsonServer.create();
const router = jsonServer.router("src/db.json");
const middlewares = jsonServer.defaults({ static: `${__dirname}/public` }); // https://qiita.com/daiti0113/items/422903f9b62f6bd2a4e0
const port = process.env.PORT || 8000;

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.use(json());
server.use(cookieParser());
server.use(express.json());

routes(server);

server.use(middlewares); // 静的ファイルの有効化
server.use(router); // httpメソッドの有効化

server.listen(port);
