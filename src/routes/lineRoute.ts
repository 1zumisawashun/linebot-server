import { Router } from "express";
const router = Router();

import { line_post } from "../controllers/lineController";
import { middleware } from "@line/bot-sdk";
import * as dotenv from "dotenv";

dotenv.config();

const config = {
  channelSecret: process.env.LINE_CHANNEL_SECRET!,
  channelAccessToken: process.env.LINE_ACCESS_TOKEN!,
};

router.post("/webhook", middleware(config), line_post);

export default router;
