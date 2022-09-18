import { Router } from "express";
const router = Router();

import { MainController } from "../controllers/mainController";

router.get("/", MainController.getAll);

export default router;
