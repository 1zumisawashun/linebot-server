import { Router } from "express";
const router = Router();

import {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController";

router.get("/", getTodo);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
