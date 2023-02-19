import { Router } from "express";
const router = Router();

import {
  createPost,
  getPost,
  updatePost,
  deletePost,
} from "../controllers/post.controller";

router.post("/", createPost);
router.get("/", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
