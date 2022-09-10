import jsonServer from "json-server";
const server = jsonServer.create();

import { line_post } from "../controllers/line";
import { middleware } from "@line/bot-sdk";
import * as dotenv from "dotenv";

dotenv.config();

const config = {
  channelSecret: process.env.LINE_CHANNEL_SECRET!,
  channelAccessToken: process.env.LINE_ACCESS_TOKEN!,
};

server.post("/webhook", middleware(config), line_post);

export default server;
