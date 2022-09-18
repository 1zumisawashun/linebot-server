import { Router } from "express";
const router = Router();

import {
  createPost,
  // getTodos,
  // updateTodo,
  // deleteTodo,
} from "../controllers/postController";

router.post("/", createPost);
// router.get("/", getTodos);
// router.patch("/:id", updateTodo);
// router.delete("/:id", deleteTodo);

export default router;
