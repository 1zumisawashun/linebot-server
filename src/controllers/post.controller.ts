import { RequestHandler } from "express";
import { TodoService } from "../services/post.service";

export const createPost: RequestHandler = async (req, res) => {
  const { title, content, authorId } = req.body;
  const todoService = new TodoService();
  try {
    const result = await todoService.createPost({ title, content, authorId });
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getPost: RequestHandler = async (req, res) => {
  const todoService = new TodoService();
  try {
    const result = await todoService.getPost();
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updatePost: RequestHandler = async (req, res) => {
  const id = +req.params.id;
  const { title, content } = req.body;
  const todoService = new TodoService();
  try {
    const result = await todoService.updatePost({ title, content, id });
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deletePost: RequestHandler = async (req, res) => {
  const id = +req.params.id;
  const todoService = new TodoService();
  try {
    const result = await todoService.deletePost(id);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};
