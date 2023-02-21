import { middleware, Client } from "@line/bot-sdk";
import * as dotenv from "dotenv";
dotenv.config();

const config = {
  channelSecret: process.env.LINE_CHANNEL_SECRET!,
  channelAccessToken: process.env.LINE_ACCESS_TOKEN!,
};

const lineClient = new Client(config);
const lineMiddleware = middleware(config);

export { lineClient, lineMiddleware };
