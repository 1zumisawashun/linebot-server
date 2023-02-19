import { Router } from "express";
const router = Router();

import { postMessage } from "../controllers/line.controller";
import { middleware } from "@line/bot-sdk";
import * as dotenv from "dotenv";

dotenv.config();

const config = {
  channelSecret: process.env.LINE_CHANNEL_SECRET!,
  channelAccessToken: process.env.LINE_ACCESS_TOKEN!,
};

router.post("/webhook", middleware(config), postMessage);

export default router;
