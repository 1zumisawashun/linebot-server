import { Router } from "express";
const router = Router();

import { postMessage } from "../controllers/line.controller";
import { lineMiddleware } from "../libs/line";

router.post("/webhook", lineMiddleware, postMessage);

export default router;
