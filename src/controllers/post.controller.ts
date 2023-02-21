import { RequestHandler } from "express";
import { PostService } from "../services/post.service";

export const createPost: RequestHandler = async (req, res) => {
  const { title, content, authorId } = req.body;
  const postService = new PostService();
  try {
    const result = await postService.createPost({ title, content, authorId });
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getPost: RequestHandler = async (req, res) => {
  const postService = new PostService();
  try {
    const result = await postService.getPost();
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updatePost: RequestHandler = async (req, res) => {
  const id = +req.params.id;
  const { title, content } = req.body;
  const postService = new PostService();
  try {
    const result = await postService.updatePost({ title, content, id });
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deletePost: RequestHandler = async (req, res) => {
  const id = +req.params.id;
  const postService = new PostService();
  try {
    const result = await postService.deletePost(id);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};
