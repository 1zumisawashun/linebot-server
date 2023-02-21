import { RequestHandler } from "express";
import { TodoService } from "../services/todo.service";

export const getTodo: RequestHandler = (req, res) => {
  const todoService = new TodoService();
  try {
    const result = todoService.getTodo();
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};
export const createTodo: RequestHandler = async (req, res) => {
  const { text } = req.body;
  const todoService = new TodoService();
  try {
    const result = todoService.createTodo(text);
    return res.json({ message: "TODOを作成しました", todos: result });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateTodo: RequestHandler = async (req, res) => {
  const todoId = req.params.id;
  const { text } = req.body;
  const todoService = new TodoService();
  try {
    const result = todoService.updateTodo(text, todoId);
    return res.json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteTodo: RequestHandler = async (req, res) => {
  const todoId = req.params.id;
  const todoService = new TodoService();
  try {
    const result = todoService.deleteTodo(todoId);
    return res.json({ message: "TODOを削除しました", todos: result });
  } catch (error) {
    return res.status(400).json(error);
  }
};
