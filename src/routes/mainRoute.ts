import { Router } from "express";
const router = Router();

import { MainController } from "../controllers/main.controller";

router.get("/", MainController.getAll);
router.get("/about", MainController.getAbout);

export default router;
