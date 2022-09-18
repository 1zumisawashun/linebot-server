import { Router } from "express";
const router = Router();

import { MainController } from "../controllers/mainController";

router.get("/", MainController.getAll);
router.get("/about", MainController.getAbout);

export default router;
